using AutoMapper;
using CafeShop.Api.DTOs;
using CafeShop.Api.Models;

namespace CafeShop.Api.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<Role, RoleDto>().ReverseMap();
            CreateMap<InventoryItem, InventoryItemDto>().ReverseMap();
            CreateMap<Bill, BillDto>().ReverseMap();
        }
    }
}
