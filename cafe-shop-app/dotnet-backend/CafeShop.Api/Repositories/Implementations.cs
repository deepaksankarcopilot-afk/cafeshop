
using System.Collections.Generic;
using System.Threading.Tasks;
using CafeShop.Api.Models;
using CafeShop.Api.Data;
using Microsoft.EntityFrameworkCore;

namespace CafeShop.Api.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly CafeShopDbContext _context;
        public UserRepository(CafeShopDbContext context) => _context = context;
        public async Task<IEnumerable<User>> GetAllAsync() => await _context.Users.ToListAsync();
        public async Task<User?> GetByIdAsync(int id) => await _context.Users.FindAsync(id);
        public async Task AddAsync(User user) { _context.Users.Add(user); await _context.SaveChangesAsync(); }
        public async Task UpdateAsync(User user) { _context.Users.Update(user); await _context.SaveChangesAsync(); }
        public async Task DeleteAsync(int id) { var user = await _context.Users.FindAsync(id); if (user != null) { _context.Users.Remove(user); await _context.SaveChangesAsync(); } }
    }

    public class RoleRepository : IRoleRepository
    {
        private readonly CafeShopDbContext _context;
        public RoleRepository(CafeShopDbContext context) => _context = context;
        public async Task<IEnumerable<Role>> GetAllAsync() => await _context.Roles.ToListAsync();
        public async Task<Role?> GetByIdAsync(int id) => await _context.Roles.FindAsync(id);
        public async Task AddAsync(Role role) { _context.Roles.Add(role); await _context.SaveChangesAsync(); }
        public async Task UpdateAsync(Role role) { _context.Roles.Update(role); await _context.SaveChangesAsync(); }
        public async Task DeleteAsync(int id) { var role = await _context.Roles.FindAsync(id); if (role != null) { _context.Roles.Remove(role); await _context.SaveChangesAsync(); } }
    }

    public class InventoryRepository : IInventoryRepository
    {
        private readonly CafeShopDbContext _context;
        public InventoryRepository(CafeShopDbContext context) => _context = context;
        public async Task<IEnumerable<InventoryItem>> GetAllAsync() => await _context.InventoryItems.ToListAsync();
        public async Task<InventoryItem?> GetByIdAsync(int id) => await _context.InventoryItems.FindAsync(id);
        public async Task AddAsync(InventoryItem item) { _context.InventoryItems.Add(item); await _context.SaveChangesAsync(); }
        public async Task UpdateAsync(InventoryItem item) { _context.InventoryItems.Update(item); await _context.SaveChangesAsync(); }
        public async Task DeleteAsync(int id) { var item = await _context.InventoryItems.FindAsync(id); if (item != null) { _context.InventoryItems.Remove(item); await _context.SaveChangesAsync(); } }
    }

    public class BillingRepository : IBillingRepository
    {
        private readonly CafeShopDbContext _context;
        public BillingRepository(CafeShopDbContext context) => _context = context;
        public async Task<IEnumerable<Bill>> GetAllAsync() => await _context.Bills.ToListAsync();
        public async Task<Bill?> GetByIdAsync(int id) => await _context.Bills.FindAsync(id);
        public async Task AddAsync(Bill bill) { _context.Bills.Add(bill); await _context.SaveChangesAsync(); }
    }
}
