using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MemoAPI.Models
{
    public class Memo
    {

        public string MemoId { get; set; }
        public string Text { get; set; }
        public string titre { get; set; }
        public DateTime date { get; set; }
        public bool Public { get; set; }
        public string userid { get; set; }

        public virtual ApplicationUser User { get; set; }


        

    }
}