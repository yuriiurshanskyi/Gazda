﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gazda.Models
{
    public class Comment
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public bool isLiked { get; set; }

    }
}
