using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    // TODO アイテムのコントローラークラス
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly TodoService _todoService;

        public TodoController(TodoService todoService)
        {
            _todoService = todoService;
        }

        // 全ての TODO アイテムを取得する
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var todos = await _todoService.GetAllTodosAsync();
            return Ok(todos);
        }

        // 新しい TODO アイテムを追加する
        [HttpPost]
        public async Task<IActionResult> Add([FromBody] TodoItem todoItem)
        {
            await _todoService.AddTodoAsync(todoItem);
            return CreatedAtAction(nameof(GetById), new { id = todoItem.Id }, todoItem);
        }

        // TODO アイテムをIDで取得する
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var todo = await _todoService.GetTodoByIdAsync(id);
            if (todo == null)
                return NotFound();
            return Ok(todo);
        }

        // TODO アイテムを編集する
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] TodoItem todoItem)
        {
            if (id != todoItem.Id)
                return BadRequest();
            await _todoService.UpdateTodoAsync(todoItem);
            return NoContent();
        }

        // TODO アイテムを削除する
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _todoService.DeleteTodoAsync(id);
            return NoContent();
        }

        // TODO アイテムの完了状態を切り替える
        [HttpPost("{id}/toggle")]
        public async Task<IActionResult> ToggleCompletion(int id)
        {
            await _todoService.ToggleTodoCompletionAsync(id);
            return NoContent();
        }

        // タグでフィルタリングした TODO アイテムを取得する
        [HttpGet("tag/{tag}")]
        public async Task<IActionResult> GetByTag(string tag)
        {
            var todos = await _todoService.GetTodosByTagAsync(tag);
            return Ok(todos);
        }
    }
}

