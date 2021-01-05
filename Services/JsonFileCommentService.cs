using Gazda.Models;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace Gazda.Services
{
    public class JsonFileCommentService
    {
        public JsonFileCommentService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }
        
        IWebHostEnvironment WebHostEnvironment { get; set; }

        private string JsonFileName
        {
            get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "comments.json"); }
        }

        private void SerializeComments(List<Comment> comments)
        {
            using (var outputStream = File.Open(JsonFileName,FileMode.Create))
            {
                JsonSerializer.Serialize<IEnumerable<Comment>>(
                    new Utf8JsonWriter(outputStream, new JsonWriterOptions
                    {
                        SkipValidation = true,
                        Indented = true
                    }), comments);
            }
        }
        
        public List<Comment> GetComments()
        {
            try
            {
                using (var jsonFileReader = File.OpenText(JsonFileName))
                {
                    return JsonSerializer.Deserialize<List<Comment>>(jsonFileReader.ReadToEnd(),
                        new JsonSerializerOptions
                        {
                            PropertyNameCaseInsensitive = true
                        });
                }
            }
            catch
            {
                return new List<Comment>();
            }
        }

        public void AddComment(Comment comment)
        {
            if(comment==null)
            {
                throw new ArgumentNullException();
            }

            var comments = GetComments();

            comments.Add(comment);

            SerializeComments(comments);
        }

        public void ChangeLike(string id)
        {
            var comments = GetComments();

            var comment = comments.First(x=> x.Id == id);

            comment.isLiked = !comment.isLiked;

            SerializeComments(comments);
        }
    }
}
