using Microsoft.EntityFrameworkCore.Diagnostics;
using System.ComponentModel.DataAnnotations;

namespace MyIMDB.Models
{
    public class MoviedetailsModel
    {
        public int Id { get; set; }

        public int Movieid { get; set; }

        public string Director { get; set; }

        public string Actors { get; set; }

        public string Producer { get; set; }   

        public string Story { get; set; } 

        public float Rating { get; set; }

        public string Commends { get; set; }
    }
}
