using Gazda.Models;
using Gazda.Services;
using Microsoft.AspNetCore.Mvc;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Gazda.Controllers
{
    [Route("/api/Comment")]
    [ApiController]
    public class CommentController : Controller
    {
        public CommentController(JsonFileCommentService jsonFileCommentService)
        {
            JsonFileCommentService = jsonFileCommentService;
        }
        public JsonFileCommentService JsonFileCommentService { get;}

        [HttpPost]
        public IActionResult Post([FromForm]Comment comment)
        {

            comment.Id = Guid.NewGuid().ToString();

            JsonFileCommentService.AddComment(comment);

            return Ok(comment);
        }

        [HttpGet]
        public JsonResult Get()
        {
            var comments = JsonFileCommentService.GetComments();
            return Json(comments);
        }

        [HttpPut]
        public IActionResult Put([FromBody] string id)
        {
            JsonFileCommentService.ChangeLike(id);
            return Ok("Successfull PUT");
        }

    }
}
