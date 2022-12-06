using FullStackAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Data
{
    public class FullStackDbContext : DbContext
    {

        public FullStackDbContext(DbContextOptions options) : base(options)
        {
        }


        public DbSet<Budget> budgets { get; set; }
        public DbSet<Solde> solde { get; set; }

    }
}
