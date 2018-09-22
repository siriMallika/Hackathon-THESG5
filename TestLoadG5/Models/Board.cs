using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestLoadG5.Models
{
    public class Board
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Detail { get; set; }
        public IEnumerable<Post> Posts { get; set; }
    }

    public class Post
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Title { get; set; }
        public string Detail { get; set; }
    }
}
