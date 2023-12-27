using System.ComponentModel.DataAnnotations;

namespace MyIMDB.Models
{
    public class MovieModel
    {
        
        public int id { get; set; }

        [Key]
        public string MovieName { get; set; }   

        public int YearOfRelease { get; set; }

        public string ShortDescript { get; set; }

        public string image { get; set; }
    }
}
