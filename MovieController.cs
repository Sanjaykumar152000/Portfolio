using Microsoft.AspNetCore.Mvc;
using MyIMDB.Data;
using MyIMDB.Models;
using MySql.Data.MySqlClient;
using System.Data;

namespace MyIMDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly MovieDbContext _context;
        public MovieController(MovieDbContext movieDbcontext)
        {
            _context = movieDbcontext;
        }
        [HttpPost("add_movie")]
        public IActionResult AddMovie([FromBody] MovieModel MovieObj)
        {
            if (MovieObj == null)
            {
                return BadRequest();
            }
            else
            {
                _context.Movies.Add(MovieObj);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Movie Added Successfully"
                }); ;
            }
        }
        [HttpGet("get_all_movies")]

        public IActionResult GetAllMovies()
        {
            var movie = _context.Movies.AsQueryable();
            return Ok(movie);
        }
        [HttpGet("get_movie/moviename")]

        public IActionResult GetMovies(string MovieName)
        {
            var movie = _context.Movies.Find();
            if (movie == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Movie Not Found"
                });
            }
            else
            {
                return Ok(new
                {
                    StatusCode = 200,
                    Movies = movie
                }) ;
            }

        }
        

    }
}
