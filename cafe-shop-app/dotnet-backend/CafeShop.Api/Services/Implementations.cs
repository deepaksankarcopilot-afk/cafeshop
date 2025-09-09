using System.Collections.Generic;
using System.Threading.Tasks;
using CafeShop.Api.Models;
using CafeShop.Api.Repositories;

namespace CafeShop.Api.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repo;
        public UserService(IUserRepository repo) => _repo = repo;
        public Task<IEnumerable<User>> GetAllAsync() => _repo.GetAllAsync();
        public Task<User?> GetByIdAsync(int id) => _repo.GetByIdAsync(id);
        public Task AddAsync(User user) => _repo.AddAsync(user);
        public Task UpdateAsync(User user) => _repo.UpdateAsync(user);
        public Task DeleteAsync(int id) => _repo.DeleteAsync(id);
    }

    public class RoleService : IRoleService
    {
        private readonly IRoleRepository _repo;
        public RoleService(IRoleRepository repo) => _repo = repo;
        public Task<IEnumerable<Role>> GetAllAsync() => _repo.GetAllAsync();
        public Task<Role?> GetByIdAsync(int id) => _repo.GetByIdAsync(id);
        public Task AddAsync(Role role) => _repo.AddAsync(role);
        public Task UpdateAsync(Role role) => _repo.UpdateAsync(role);
        public Task DeleteAsync(int id) => _repo.DeleteAsync(id);
    }

    public class InventoryService : IInventoryService
    {
        private readonly IInventoryRepository _repo;
        public InventoryService(IInventoryRepository repo) => _repo = repo;
        public Task<IEnumerable<InventoryItem>> GetAllAsync() => _repo.GetAllAsync();
        public Task<InventoryItem?> GetByIdAsync(int id) => _repo.GetByIdAsync(id);
        public Task AddAsync(InventoryItem item) => _repo.AddAsync(item);
        public Task UpdateAsync(InventoryItem item) => _repo.UpdateAsync(item);
        public Task DeleteAsync(int id) => _repo.DeleteAsync(id);
    }

    public class BillingService : IBillingService
    {
        private readonly IBillingRepository _repo;
        public BillingService(IBillingRepository repo) => _repo = repo;
        public Task<IEnumerable<Bill>> GetAllAsync() => _repo.GetAllAsync();
        public Task<Bill?> GetByIdAsync(int id) => _repo.GetByIdAsync(id);
        public Task AddAsync(Bill bill) => _repo.AddAsync(bill);
    }
}
