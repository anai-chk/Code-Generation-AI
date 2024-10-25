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


// using Microsoft.AspNetCore.Mvc;
// using System.Threading Tasks;
// using WebAppIication1. M0deIs;
// using WebAppIication1. Services;
// namespace WebAppIication1.Contr011ers
// / / TODO アイテムのコントローラークラス
// [ApiContr011er]
// [Route("api/[controlIerV')]
// public class T0d0Contr011er : Contr011erBase
// private readonly TodoService —todoService;
// public T0d0Contr011er(T0d0Service t0d0Service)
// ー todoSe Ⅳ に 2 todoSe 「 ⅵ ce;
// / / 全ての TODO アイテムを取得する
// [HttpGet]
// public async Task<lActionResuIt> GetAll()
// var tOdOS await ーt0d0S2Ⅳに0.GetAIITodosAsync();
// return Ok(t0dos);
// / / 新しい TODO アイテムを追加する
// [HttpPost]
// public async Task<IActionResult> Add([FromBody] TOdO 代 em tOdO em )
// await -todoService.AddTodoAsync(todoItem);
// return CreatedAtAction(nameof(GetByld), new { id = tOdO em 」 d
// } , tOdO 代 em ) ;
// / / TODO アイテムを旧で取得する
// [HttpGetC'{id)")]
// public async Task<IActionResult> GetById(int id)
// var tOdO = await ーt0d0S0「ⅵ(). GetTodoByIdAsync(id);
// if (tOdO = = null)
//     return NOtFound();
// return Ok(todo);
// / / TODO アイテムを編集する
// [HttpPut("{id}")]
// public async Task<IActionResult> Update(int id, [FromBody] TOdO に em tOdO 代 em)
// if () d に todoltem.ld)
// return BadRequest();
// await —todoService.UpdateTodoAsync(todoItem);
// return NoContent();
// / / TODO アイテムを削除する
// [HttpDelete("{id}")]
// public async Task<IActionResult> DeIete(int id)
// await —todoService.DeIeteTodoAsync(id);
// return NoContent();
// / / TODO アイテムの完了状態を切り替える
// [HttpPostC'{id)/toggle")]
// public async Task<IActionResult> ToggIeCompIetion(int id)
// await —todoService.ToggIeTodoCompIetionAsync(id);
// return NoContent();
// / / タグでフィルタリングした TODO アイテムを取得する
// [HttpGet("tag/{tag}")]
// public async Task<IActionResult> GetByTag(string tag)
// var tOdOS = await —todoService. GetTodosByTagAsync(tag);
// return Ok(t0dos);
// }
// }
// }