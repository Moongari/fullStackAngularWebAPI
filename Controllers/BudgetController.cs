using FullStackAPI.Data;
using FullStackAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace FullStackAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class BudgetController : Controller
    {

        private readonly FullStackDbContext _fullStackDbContext;

        public BudgetController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllDepenses()
        {
            var depenses = await _fullStackDbContext.budgets.ToListAsync();
            if (depenses == null) { return NotFound(depenses); }
            return Ok(depenses);
        }




        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetDepense([FromRoute] int id)
        {
            var depense = await _fullStackDbContext.budgets.FirstOrDefaultAsync(x => x.id == id);
            if (depense == null) { return NotFound(depense); }
            return Ok(depense);
        }


        [HttpPost]
        public async Task<IActionResult> AddDepenses([FromBody] Budget budgetRequest)
        {
            budgetRequest.id = 0;
            budgetRequest.categories.ToUpper();
            if (budgetRequest == null) { return BadRequest(); }
            await _fullStackDbContext.budgets.AddAsync(budgetRequest);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(budgetRequest);

        }

        [HttpGet]
        [Route("ByCategorie/{term}")]
        public async Task<IActionResult> getCategorieByTerm([FromRoute] string term)
        {
            if(term == null) { return BadRequest(); }

            var CategorieChoice = await _fullStackDbContext.budgets
                .Where(cat=> cat.categories.StartsWith(term))
                .ToListAsync();

            if(CategorieChoice.Count == 0) { return NotFound("Aucun element trouvé"); }
            

            if(CategorieChoice == null) { return BadRequest(); }
            return Ok(CategorieChoice);
            
        }
    }
}
