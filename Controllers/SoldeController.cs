using FullStackAPI.Data;
using FullStackAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStackAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SoldeController : Controller
    {
        private FullStackDbContext _fullStackDbContext;

        public SoldeController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetSolde()
        {
            var ActualSolde = await _fullStackDbContext.solde.ToListAsync();
            if (ActualSolde == null) { return NotFound(ActualSolde); }
            return Ok(ActualSolde);
        }


        [HttpPost]
        public async Task<IActionResult> AddSolde([FromBody] Solde soldeRequest)
        {
            if (soldeRequest == null) { return BadRequest(); }

            await _fullStackDbContext.solde.AddAsync(soldeRequest);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(soldeRequest);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> UpdateSolde([FromRoute]int id,Solde updateSoldeRequest)
        {
            var updateSolde = await _fullStackDbContext.solde.FindAsync( id);
            if(updateSolde == null) { return BadRequest(); }

                
               updateSolde.amount = updateSoldeRequest.amount;
               updateSolde.dateSolde = updateSoldeRequest.dateSolde;


            await _fullStackDbContext.SaveChangesAsync();

            return Ok(updateSolde);

        }

    }
}
