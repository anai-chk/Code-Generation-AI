using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Repositories
{
    // TODO アイテムのリポジトリクラス
    public class TodoRepository
    {
        private readonly ApplicationDbContext _context;

        public TodoRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // TODO アイテムを全て取得する
        public async Task<List<TodoItem>> GetAllAsync()
        {
            return await _context.TodoItems.ToListAsync();
        }

        // 新しい TODO アイテムを追加する
        public async Task AddAsync(TodoItem todoItem)
        {
            await _context.TodoItems.AddAsync(todoItem);
            await _context.SaveChangesAsync();
        }

        // TODO アイテムを編集する
        public async Task UpdateAsync(TodoItem todoItem)
        {
            _context.TodoItems.Update(todoItem);
            await _context.SaveChangesAsync();
        }

        // TODO アイテムを削除する
        public async Task DeleteAsync(int id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem != null)
            {
                _context.TodoItems.Remove(todoItem);
                await _context.SaveChangesAsync();
            }
        }

        // IDで TODO アイテムを取得する
        public async Task<TodoItem> GetByIdAsync(int id)
        {
            return await _context.TodoItems.FindAsync(id);
        }

        // タスクの完了状態を切り替える
        public async Task ToggleCompletionAsync(int id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);
            if (todoItem != null)
            {
                todoItem.IsCompleted = !todoItem.IsCompleted;
                await _context.SaveChangesAsync();
            }
        }

        // タグでフィルタリングした TODO アイテムを取得する
        public async Task<List<TodoItem>> GetByTagAsync(string tag)
        {
            return await _context.TodoItems
                .Where(t => t.Tags.Contains(tag))
                .ToListAsync();
        }
    }
}


// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.EntityFrameworkCore;
// using WebApplicationI.Models;
// namespace WebAppIication1.Repositories
// / / TODO アイテムのリポジトリクラス
// public class T0d0Repository
// private readonly AppIicationDbContext -context,
// public T0d0Repository(ApplicationDbContext context)
// —context 編 context;
// / / TODO アイテムを全て取得する
// public async Task く List くT0d0に2E” GetAllAsync()
// return await —context.Todoltems.ToListAsync();
// / / 新しい TODO アイテムを追加する
// public async Task AddAsync(TodoItem todoltem)
// await —context.Todoltems.AddAsync(todoItem);
// await —context.SaveChangesAsync();
// / / TODO アイテムを編集する
// public async Task UpdateAsync(TodoItem todoltem)
// —context.TodoItems.Update(todoItem);
// await —context.SaveChangesAsync();
// / / TODO アイテムを削除する
// public async Task DeleteAsync(int id)
// var todoltem = await —context.TodoItems.FindAsync(id);
// if (todoltem null)
// —context.TodoItems.Remove(todoItem);
// await —context.SaveChangesAsync();
// / / TODO アイテムを旧で取得する
// public async Task く T0d01tem> GetByldAsync(int id)
// return await —context.Todoltems.FindAsync(id);
// / / タスクの完了状態を切り替える
// public async Task ToggleCompletionAsync(int id)
// var todoltem = await —context.TodoItems.FindAsync(id);
// if (todoltem ! null)
// todoItem.IsCompIeted = !todoltem IsCompIeted;
// await —context.SaveChangesAsync();
// / / タグでフィルタリングした TODO アイテムを取得する
// public async Task く List く T0d01tem>> GetByTagAsync(string tag)
// return await —context.Todoltems
// .Where(t = > t.Tags.Contains(tag))
// . ToListAsync();
// }
// }
// }