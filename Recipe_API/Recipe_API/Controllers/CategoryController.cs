using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Recipe_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {//Create a local category list
    public static List<Category> categories = new List<Category>
{
    new Category{Code=1, Name="Stews and Casseroles", IconRoute="🥘"},
    new Category{Code=2, Name="Baking and Cakes", IconRoute="🍰"},
    new Category{Code=3, Name="Dairy", IconRoute="🥛"},
    new Category{Code=4, Name="Salads and Side Dishes", IconRoute="🥗"},
    new Category{Code=5, Name="Fish and Seafood", IconRoute="🐟"},
    new Category{Code=6, Name="Pizzas and Pastries", IconRoute="🍕"},
    new Category{Code=7, Name="Desserts and Homemade Treats", IconRoute="🍨"},
    new Category{Code=8, Name="Summer Drinks and Coolers", IconRoute="🍹"},
    new Category{Code=9, Name="Meat and Poultry", IconRoute="🍗"}

};
    // GET: api/<CategoryController>
    [HttpGet]
        public ActionResult<IEnumerable<Category>> Get()
        {
            return Ok(categories);
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public ActionResult<Category> Get(int id)
        {
            var category = categories.Find(c=>c.Code==id);
            if (category == null)
                return NotFound();
            return Ok(category);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category category)
        {
            categories.Add(category);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Category category)
        {
            Category categoryForUpdating = categories.Find(c => c.Code == id);
            if (categoryForUpdating == null)
                return NotFound();
            categoryForUpdating.Name = category.Name;
            categoryForUpdating.IconRoute= category.IconRoute;
            return NoContent();

        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Category categoryForDeleting = categories.Find(c => c.Code == id);
            if (categoryForDeleting == null)
                return NotFound();
            categories.Remove(categoryForDeleting);
            return NoContent();
        }
    }
}
