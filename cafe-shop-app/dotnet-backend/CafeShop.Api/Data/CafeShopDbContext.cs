using Microsoft.EntityFrameworkCore;
using CafeShop.Api.Models;

namespace CafeShop.Api.Data
{
    public class CafeShopDbContext : DbContext
    {
        public CafeShopDbContext(DbContextOptions<CafeShopDbContext> options) : base(options) {}

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<InventoryItem> InventoryItems { get; set; }
        public DbSet<Bill> Bills { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure entity relationships and constraints here
            // (Seeding removed as per user request to not seed in code)
        }
    }
}
