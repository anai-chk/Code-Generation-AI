import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

/* existing imports */
import Codeium from "./CodeGenerationAIs/Codeium/CodeiumTodos";
import GithubCopilot from "./CodeGenerationAIs/GithubCopilot/GithubCopilotTodos";
import Tabnine from "./CodeGenerationAIs/Tabnine/TabnineTodos";
import ChatGPTTodos from "./ConversationalAIs/ChatGPT-4o/App";
import ClaudeTodos from "./ConversationalAIs/Claude/TodoApplication";
import CopilotTodos from "./ConversationalAIs/Copilot/App";
import GeminiTodos from "./ConversationalAIs/Gemini/App";
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/GithubCopilot",
    element: <GithubCopilot />,
  },
  {
    path: "/Codeium",
    element: <Codeium />,
  },
  {
    path: "/Tabnine",
    element: <Tabnine />,
  },
  {
    path: "/ChatGPT",
    element: <ChatGPTTodos />,
  },
  {
    path: "/Copilot",
    element: <CopilotTodos />,
  },
  {
    path: "/Gemini",
    element: <GeminiTodos />,
  },
  {
    path: "/Claude",
    element: <ClaudeTodos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
