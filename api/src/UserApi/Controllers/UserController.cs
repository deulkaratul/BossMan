using Microsoft.AspNetCore.Mvc;
using UserApi.Models;

namespace UserApi.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController: ControllerBase{

    private List<User> _users = new List<User>(){
        new User(){Name="John Doe", Salary=23,Id=1001,DateOfBirth= new DateTime(),City="Durban"}
    };

 [HttpGet(Name = "GetUsers")]
    public IEnumerable<User> Get()
    {
        return _users;
    }
}