import React from "react";
import TabnineTodos from "./TabnineTodos";

describe("TabnineTodos Component", () => {
  it("should not modify the todos array if the index is out of bounds", () => {
    const { result } = renderHook(() =>
      useState<string[]>(["Task 1", "Task 2", "Task 3"])
    );
    const [todos, setTodos] = result.current;

    act(() => {
      const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
      };
      removeTodo(5); // index out of bounds
    });

    expect(result.current[0]).toEqual(["Task 1", "Task 2", "Task 3"]);
  });

  it("should handle removing the first item in the todos array", () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <TabnineTodos />
    );

    const input = getByPlaceholderText("Add a new todo");
    const addButton = getByText("Add");

    // Add two todos
    fireEvent.change(input, { target: { value: "First Todo" } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: "Second Todo" } });
    fireEvent.click(addButton);

    // Remove the first todo
    const removeButton = getByText("Remove");
    fireEvent.click(removeButton);

    // Assert the first todo is removed
    expect(queryByText("First Todo")).toBeNull();
    expect(getByText("Second Todo")).toBeInTheDocument();
  });

  it("should maintain the order of remaining items after removal", () => {
    const { getByText, getAllByRole } = render(<TabnineTodos />);

    const input = getByRole("textbox");
    const addButton = getByText("Add");

    // Add multiple todos
    fireEvent.change(input, { target: { value: "First Todo" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "Second Todo" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "Third Todo" } });
    fireEvent.click(addButton);

    // Remove the second todo
    const removeButtons = getAllByRole("button", { name: /remove/i });
    fireEvent.click(removeButtons[1]);

    // Check the remaining todos are in the correct order
    const todos = getAllByRole("listitem");
    expect(todos[0].textContent).toContain("First Todo");
    expect(todos[1].textContent).toContain("Third Todo");
  });

  it("Should not throw an error if todos array is empty", () => {
    const { result } = renderHook(() => useState<string[]>([]));
    const [todos, setTodos] = result.current;

    expect(() => {
      const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
      };
      removeTodo(0);
    }).not.toThrow();
  });

  it("should correctly update the todos array if multiple items are present", () => {
    const { result } = renderHook(() =>
      useState<string[]>(["Todo 1", "Todo 2", "Todo 3"])
    );
    const [todos, setTodos] = result.current;

    act(() => {
      const removeTodo = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
      };
      removeTodo(1); // Remove "Todo 2"
    });

    expect(result.current[0]).toEqual(["Todo 1", "Todo 3"]);
  });

  it("should handle negative index by not removing any item", () => {
    const { result } = renderHook(() =>
      useState<string[]>(["Task 1", "Task 2"])
    );
    const [todos, setTodos] = result.current;

    act(() => {
      setTodos(todos.filter((_, i) => i !== -1));
    });

    expect(result.current[0]).toEqual(["Task 1", "Task 2"]);
  });

  it("should handle non-integer index by not removing any item", () => {
    const { result } = renderHook(() =>
      useState(["Task 1", "Task 2", "Task 3"])
    );
    const [, setTodos] = result.current;

    act(() => {
      setTodos((todos) => todos.filter((_, i) => i !== "a"));
    });

    expect(result.current[0]).toEqual(["Task 1", "Task 2", "Task 3"]);
  });

  it("インデックスがNaNの場合、アイテムを削除しないこと", () => {
    const { getByText, queryAllByRole } = render(<TabnineTodos />);

    // Todoアイテムを追加
    fireEvent.change(screen.getByPlaceholderText("Add a new todo"), {
      target: { value: "Test Todo" },
    });
    fireEvent.click(getByText("Add"));

    // NaNインデックスでTodoを削除しようとする
    const initialTodos = queryAllByRole("listitem").length;
    removeTodo(NaN);

    // Todoが削除されていないことを確認
    const todosAfterAttempt = queryAllByRole("listitem").length;
    expect(todosAfterAttempt).toBe(initialTodos);
  });
});
