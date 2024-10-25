using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Repositories;

namespace WebApplication1.Services
{
    // TODO アイテムのサービスクラス
    public class TodoService
    {
        private readonly TodoRepository _todoRepository;

        public TodoService(TodoRepository todoRepository)
        {
            _todoRepository = todoRepository;
        }

        // 全ての TODO アイテムを取得する
        public async Task<List<TodoItem>> GetAllTodosAsync()
        {
            return await _todoRepository.GetAllAsync();
        }

        // 新しい TODO アイテムを追加する
        public async Task AddTodoAsync(TodoItem todoItem)
        {
            await _todoRepository.AddAsync(todoItem);
        }

        // TODO アイテムを編集する
        public async Task UpdateTodoAsync(TodoItem todoItem)
        {
            await _todoRepository.UpdateAsync(todoItem);
        }

        // TODO アイテムを削除する
        public async Task DeleteTodoAsync(int id)
        {
            await _todoRepository.DeleteAsync(id);
        }

        // IDで TODO アイテムを取得する
        public async Task<TodoItem> GetTodoByIdAsync(int id)
        {
            return await _todoRepository.GetByIdAsync(id);
        }

        // TODO アイテムの完了状態を切り替える
        public async Task ToggleTodoCompletionAsync(int id)
        {
            await _todoRepository.ToggleCompletionAsync(id);
        }

        // タグでフィルタリングした TODO アイテムを取得する
        public async Task<List<TodoItem>> GetTodosByTagAsync(string tag)
        {
            return await _todoRepository.GetByTagAsync(tag);
        }
    }
}


// using System.Collections.Generic;
// using System.Threading.Tasks;
// using WebAppIication1.ModeIs;
// using WebAppIication1.Repositories;
// namespace WebAppIication1.Services
// / / TODO アイテムのサービスクラス
// public class TodoService
// private 「 eadon ツ TodoRepository —todoRepository;
// public TodoService(TodoRepository todoRepository)
// —todoRepository = todoRepository;
// / / 全ての TODO アイテムを取得する
// public async Task く List く Todoltem>> GetAllTodosAsync()
// return await -todoRepository.GetAIIAsync();
// / / 新しい TODO アイテムを追加する
// public async Task AddTOdOAsync(TodoItem todoltem)
// await -todoRepository.AddAsync(todoltem);
// 〃 TODO アイテムを編集する
// public async Task UpdateTodoAsync(TodoItem todoltem)
// await -todoRepository.UpdateAsync(todoltem);
// / / TODO アイテムを削除する
// public async Task DeleteTOdoAsync(intid)
// await -todoRepository.DeIeteAsync(id);
// / / 旧で TODO アイテムを取得する
// public async Task く Todoltem> GetTodoByIdAsync(int id)
// return await —todoRepository.GetByldAsync(id);
// / / TODO アイテムの完了状態を切り替える
// public async Task ToggleTodoCompIetionAsync(int id)
// await —todoRepository.ToggIeCompIetionAsync(id);
// / / タグでフィルタリングした TODO アイテムを取得する
// public async Task く List く T0d01tem>> GetT0dosByTagAsync(string tag)
// return await -t0d0Repository.GetByTagAsync(tag);