using System.ComponentModel.DataAnnotations;

namespace FullStackAPI.Models
{
    public sealed class Solde
    {

        
        public int id { get; set; }

        public double amount { get; set; }
        public DateTime dateSolde { get; set; }
    }
}
