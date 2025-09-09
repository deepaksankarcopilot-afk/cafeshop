using Microsoft.AspNetCore.Mvc;
using CafeShop.Api.Services;
using CafeShop.Api.Models;
using System.Threading.Tasks;

namespace CafeShop.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BillingController : ControllerBase
    {
        private readonly IBillingService _service;
        public BillingController(IBillingService service) => _service = service;

        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _service.GetAllAsync());

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var bill = await _service.GetByIdAsync(id);
            if (bill == null) return NotFound();
            return Ok(bill);
        }

        [HttpPost]
        public async Task<IActionResult> Add(Bill bill)
        {
            await _service.AddAsync(bill);
            return CreatedAtAction(nameof(GetById), new { id = bill.Id }, bill);
        }
    }
}
