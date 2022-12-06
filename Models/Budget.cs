using System.ComponentModel.DataAnnotations;

namespace FullStackAPI.Models
{
    public sealed class Budget
    {

    
        public int id { get; set; }
        public string name { get; set; }
        public double amount { get; set; }
        public string categories { get; set; }
        public Boolean mandatory { get; set; }
        public string dateDepenses { get; set; }
    }
}
