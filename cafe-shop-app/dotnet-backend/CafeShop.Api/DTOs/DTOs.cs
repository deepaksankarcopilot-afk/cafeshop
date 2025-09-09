using System.Collections.Generic;

namespace CafeShop.Api.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public List<string>? Roles { get; set; }
    }

    public class RoleDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
    }

    public class InventoryItemDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }

    public class BillDto
    {
        public int Id { get; set; }
        public string Date { get; set; } = string.Empty;
        public decimal TotalAmount { get; set; }
        public List<InventoryItemDto>? Items { get; set; }
    }
}
