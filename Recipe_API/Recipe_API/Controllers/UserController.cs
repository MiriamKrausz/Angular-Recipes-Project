using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Recipe_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> users = new List<User>
        {
            new User{Code=1,Name="Shevy Kossovsky",Address="add1",Email="add1@",Password="3361"},
            new User{Code=2,Name="Miri Krausz",Address="add2",Email="add2@",Password="4576"},
        };
        // GET: api/<CategoryController>
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return Ok(users);
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            var user = users.Find(c => c.Code == id);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] User user )
        {
            users.Add(user);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] User user)
        {
            User userForUpdating=users.Find(c => c.Code == id);
            
            if (userForUpdating == null)
                return NotFound();
            userForUpdating.Name = user.Name;
            userForUpdating.Address = user.Address;
            userForUpdating.Email = user.Email;
            userForUpdating.Password = user.Password;
            return NoContent();

        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            User userForDeleting = users.Find(c => c.Code == id);
            if (userForDeleting == null)
                return NotFound();
            users.Remove(userForDeleting);
            return NoContent();
        }
    }
}
