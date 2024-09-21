using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using tvdbAPI.Models;

namespace tvdbAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TvDetailController : ControllerBase
    {
        private readonly TvDetailContext _context;

        public TvDetailController(TvDetailContext context)
        {
            _context = context;
        }

        // GET: api/TvDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TvDetail>>> GetTvDetails()
        {
          if (_context.TvDetails == null)
          {
              return NotFound();
          }
            return await _context.TvDetails.ToListAsync();
        }

        // GET: api/TvDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TvDetail>> GetTvDetail(int id)
        {
          if (_context.TvDetails == null)
          {
              return NotFound();
          }
            var tvDetail = await _context.TvDetails.FindAsync(id);

            if (tvDetail == null)
            {
                return NotFound();
            }

            return tvDetail;
        }

        // PUT: api/TvDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTvDetail(int id, TvDetail tvDetail)
        {
            if (id != tvDetail.TvDetailId)
            {
                return BadRequest();
            }

            _context.Entry(tvDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TvDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(await _context.TvDetails.ToListAsync());
        }

        // POST: api/TvDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TvDetail>> PostTvDetail(TvDetail tvDetail)
        {
          if (_context.TvDetails == null)
          {
              return Problem("Entity set 'TvDetailContext.TvDetails'  is null.");
          }
            _context.TvDetails.Add(tvDetail);
            await _context.SaveChangesAsync();

            return Ok(await _context.TvDetails.ToListAsync());
        }

        // DELETE: api/TvDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTvDetail(int id)
        {
            if (_context.TvDetails == null)
            {
                return NotFound();
            }
            var tvDetail = await _context.TvDetails.FindAsync(id);
            if (tvDetail == null)
            {
                return NotFound();
            }

            _context.TvDetails.Remove(tvDetail);
            await _context.SaveChangesAsync();

            return Ok(await _context.TvDetails.ToListAsync());
        }

        private bool TvDetailExists(int id)
        {
            return (_context.TvDetails?.Any(e => e.TvDetailId == id)).GetValueOrDefault();
        }
    }
}