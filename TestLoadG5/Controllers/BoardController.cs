using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestLoadG5.Models;

namespace TestLoadG5.Controllers
{
    [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
    [Route("api/[controller]/[action]")]
    public class BoardController : Controller
    {
        public static List<Board> Boards = new List<Board>();

        [HttpGet]
        public ActionResult<IEnumerable<Board>> List()
        {
            return Boards;
        }

        [HttpGet("{id}")]
        public ActionResult<Board> Get(string id)
        {
            return Boards.FirstOrDefault(x => x.Id == id);
        }

        [HttpPost]
        public void Create([FromBody]Board request)
        {
            request.Id = Guid.NewGuid().ToString();
            Boards.Add(request);
        }

        [HttpPost("{id}")]
        public void Edit(string id, [FromBody]Board request)
        {
            var product = Boards.FirstOrDefault(x => x.Id == id);
            product.Title = request.Title;
            product.Detail = request.Detail;
        }

        [HttpPost("{id}")]
        public void Delete(string id)
        {
            Boards = Boards.Where(x => x.Id != id).ToList();
        }

        [HttpPost("{id}")]
        public void Post(string id, [FromBody]Post request)
        {
            var board = Boards.FirstOrDefault(x => x.Id == id);
            request.Id = Guid.NewGuid().ToString();
            board.Posts.Add(request);
        }

        [HttpGet]
        public void UseMockProducts()
        {
            Boards = new List<Board>{
                new Board{
                    Id = Guid.NewGuid().ToString(),
                    Title = "LG TV",
                    Detail = "LG1234",
                },
                new Board{
                    Id = Guid.NewGuid().ToString(),
                    Title = "iPhone Z",
                    Detail = "PZ3452",
                },
                new Board{
                    Id = Guid.NewGuid().ToString(),
                    Title = "mi Pro 5",
                    Detail = "PRO258",
                },
                new Board{
                    Id = Guid.NewGuid().ToString(),
                    Title = "V9",
                    Detail = "V93654",
                },
            };
        }

        [HttpGet]
        public void Reset()
        {
            Boards = new List<Board>();
        }
    }
}
