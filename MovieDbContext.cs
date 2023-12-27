using Microsoft.EntityFrameworkCore;
using MyIMDB.Models;

namespace MyIMDB.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options)
        {

        }
        public DbSet<MovieModel> Movies { get; set; }
        public DbSet<MoviedetailsModel> MovieDetails { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MovieModel>().ToTable("movies");

            modelBuilder.Entity<MoviedetailsModel>().ToTable("moviedetails");
        }
    }
}