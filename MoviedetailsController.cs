using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Protocol;
using MyIMDB.Data;
using MyIMDB.Models;
using MySqlConnector;
using System.Data;

namespace MyIMDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviedetailsController : ControllerBase
    {
        private readonly MovieDbContext _context;
        public MoviedetailsController(MovieDbContext movieDbContext)
        {
            _context = movieDbContext;
        }
        public string DefaultConnectionString = "SERVER=localhost;port=3306;UID=root;database=imdb;PASSWORD=root@123;persistsecurityinfo=True;";
        [HttpPost("add_moviedetails")]
        public IActionResult AddMoviedetails([FromBody] MoviedetailsModel moviedetailsObj)
        {
            if (moviedetailsObj == null)
            {
                return BadRequest();
            }
            else
            {
                _context.MovieDetails.Add(moviedetailsObj);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Movie Details Added Successfully"
                });
            }
        }
        [HttpGet("get_all_moviedetails")]

        public IActionResult GetAllMoviedetails()
        {
            var moviedetails = _context.MovieDetails.AsQueryable();
            return Ok(new
            {
                StatusCode = 200,
                Moviedetails = moviedetails
            });
        }
        [HttpGet("get_moviedetails/movieid")]
            public IActionResult GetMoviedetails(int Movieid)
        {
            var moviedetails = _context.MovieDetails.Find(Movieid);
            if (moviedetails == null)
            {
                return NotFound(new
                {
                    StatusCode = 404,
                    Message = "Movie details not found"
                });
            }
            else
            {
                return Ok(new
                {
                    StatusCode = 200,
                    Moviedetails = moviedetails
                });
            }
        }
        [HttpGet("get_fullmoviedetails")]
        public JsonResult GetFullMoviedetails(int id)
        {
            string query = @"
select * from movies inner join moviedetails on movies.id = moviedetails.Movieid
where movies.id=@id";
            DataTable table = new DataTable();
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(DefaultConnectionString))
            {
                mycon.Open();
                using(MySqlCommand mycommand = new MySqlCommand(query, mycon))
                {
                    mycommand.Parameters.AddWithValue("@id", id);
                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader);


                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost("add_full_Moviedetails")]

        public JsonResult AddMovieFullMoviedetails([FromBody] MovieFulldetails movie)
        {
            string query = @"
           call imdb.Post_all_details('"+ movie.MovieName+"',"+ movie.YearOfRelease+",'"+movie.ShortDescript+"', '"+movie.image+"', '"+movie.Director+"', '"+movie.Actors+"', '"+movie.Producer+"', '"+movie.Story+"',"+movie.Rating+", '"+movie.Commends+"')";

            DataTable table = new DataTable();
            MySqlDataReader myReader;



            using (MySqlConnection mycon = new MySqlConnection(DefaultConnectionString))
            {
                mycon.Open();
                using (MySqlCommand mycommand = new MySqlCommand(query, mycon))
                {
                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpGet("get_movie_search")]
        public object GetMovieSearch(string moviesearch)
        {
            string query = @"select * from movies where MovieName LIKE '%"+moviesearch+"%'";


            DataTable table = new DataTable();
            MySqlDataReader myReader;

            using (MySqlConnection mycon = new MySqlConnection(DefaultConnectionString))
            {
                mycon.Open();
                using (MySqlCommand mycommand = new MySqlCommand(@query, mycon))
                {


                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader) ;


                    myReader.Close();
                    myReader.Close();
                }
            }
            return new JsonResult(new { result = table });
        }

        [HttpGet("get_userreview")]
        public JsonResult GetUserReview(int id)
        {
            string query = @"
select moviereview.UserName, moviereview.UserCommends, moviereview.UserRating from movies inner join moviereview on movies.id = moviereview.MovieReviewId
where movies.id=@id";
            DataTable table = new DataTable();
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(DefaultConnectionString))
            {
                mycon.Open();
                using (MySqlCommand mycommand = new MySqlCommand(query, mycon))
                {
                    mycommand.Parameters.AddWithValue("@id", id);
                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader);


                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost("add_userreview")]

        public JsonResult AddUserReview([FromBody] MovieReviewModel moviereview)
        {
            //string query = @  call myimdb.Post_Movie_Review("+ moviereview.MovieReviewId+",'" + moviereview.UserName + "','" + moviereview.UserCommends + "'," + moviereview.UserRating + ")";
            string query = @"Insert into moviereview(MovieReviewId,UserName,UserCommends,UserRating)
Values ("+ moviereview.MovieReviewId+",'" + moviereview.UserName + "','" + moviereview.UserCommends + "'," + moviereview.UserRating + ")";
            DataTable table = new DataTable();
            MySqlDataReader myReader;



            using (MySqlConnection mycon = new MySqlConnection(DefaultConnectionString))
            {
                mycon.Open();
                using (MySqlCommand mycommand = new MySqlCommand(query, mycon))
                {
                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }


        [HttpGet("get_avguserreview")]
        public JsonResult GetAVGUserReview(int id)
        {
            string query = @"
                            SELECT AVG(UserRating) FROM moviereview where MovieReviewId=@id";
            DataTable table = new DataTable();
            MySqlDataReader myReader;
            using (MySqlConnection mycon = new MySqlConnection(DefaultConnectionString))
            {
                mycon.Open();
                using (MySqlCommand mycommand = new MySqlCommand(query, mycon))
                {
                    mycommand.Parameters.AddWithValue("@id", id);
                    myReader = mycommand.ExecuteReader();
                    table.Load(myReader);


                    myReader.Close();
                    mycon.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
