using FullStackAPI.Data;
using FullStackAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Net;

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
            if (term == null) { return BadRequest("not found"); }

            var CategorieChoice = await _fullStackDbContext.budgets
                .Where(cat => cat.categories.Contains(term))
                .ToListAsync();




            if (CategorieChoice == null) { return BadRequest(); }
            if (CategorieChoice.Count == 0)
            {

                return NotFound("no data found");
            }
            return Ok(CategorieChoice);

        }


        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteCategorySpent([FromRoute] int id)
        {
            if(id == 0) { return NotFound("this id do not exist in database"); }

            var deleteCategoryRequest = await _fullStackDbContext.budgets.FindAsync( id);
            if (deleteCategoryRequest == null) { return BadRequest(); }
            _fullStackDbContext.budgets.Remove(deleteCategoryRequest);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(deleteCategoryRequest);


        }
    }
}
