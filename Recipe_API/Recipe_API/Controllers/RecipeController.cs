using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Recipe_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RecipeController : ControllerBase
  {
    public static List<Recipe> recipes = new List<Recipe>
{
    new Recipe
    {
        Code = 1,
        Name = "Dreamy chocolate cake",
        CategoryCode = 2,
        PreparationTime = 72,
        DifficultyLevel = 5,
        DateAddedToWebsite = new DateTime(2024, 05, 01),
        Ingredients = new List<string>{"Chocolate", "Flour", "Sugar", "Butter", "Eggs", "Vanilla extract", "Baking powder", "Salt", "Milk"},
        Preparation = new List<string>
        {
            "Preheat oven to 350°F (175°C) and grease a 9x13-inch baking dish.",
            "In a large mixing bowl, cream together butter and sugar until light and fluffy.",
            "Beat in eggs, one at a time, then stir in vanilla extract.",
            "Combine flour, cocoa powder, baking powder, and salt; gradually add to creamed mixture alternately with milk, beginning and ending with dry ingredients.",
            "Spread batter into prepared baking dish and bake in preheated oven for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean.",
            "Allow to cool completely before frosting with your favorite frosting."
        },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/food/ertat_beit_israel-3130_resized-830x625.jpg"
    },
    new Recipe
    {
        Code = 2,
        Name = "Creamy pasta",
        CategoryCode = 3,
        PreparationTime = 30,
        DifficultyLevel = 2,
        DateAddedToWebsite = new DateTime(2024, 05, 01),
        Ingredients = new List<string>{"Pasta", "Heavy cream", "Parmesan cheese", "Butter", "Garlic", "Salt", "Black pepper", "Fresh parsley"},
        Preparation = new List<string>
        {
            "Cook pasta according to package instructions; drain and set aside.",
            "In a large skillet, melt butter over medium heat.",
            "Add minced garlic and cook until fragrant, about 1 minute.",
            "Stir in heavy cream and bring to a simmer.",
            "Add grated Parmesan cheese, salt, and black pepper to taste.",
            "Continue cooking until sauce thickens slightly.",
            "Add cooked pasta to the skillet and toss until evenly coated with sauce.",
            "Garnish with chopped fresh parsley before serving."
        },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/food/creamy-pasta.jpg"
    },
    new Recipe
    {
        Code = 3,
        Name = "Greek salad",
        CategoryCode = 4,
        PreparationTime = 15,
        DifficultyLevel = 1,
        DateAddedToWebsite = new DateTime(2024, 05, 01),
        Ingredients = new List<string>{"Cucumbers", "Tomatoes", "Red onion", "Feta cheese", "Kalamata olives", "Extra virgin olive oil", "Red wine vinegar", "Dried oregano", "Salt", "Black pepper"},
        Preparation = new List<string>
        {
            "Slice cucumbers, tomatoes, and red onion into bite-sized pieces.",
            "In a large bowl, combine the sliced vegetables with crumbled feta cheese and pitted Kalamata olives.",
            "In a small bowl, whisk together extra virgin olive oil, red wine vinegar, dried oregano, salt, and black pepper to make the dressing.",
            "Pour the dressing over the salad and toss gently to coat.",
            "Serve immediately or refrigerate until ready to serve."
        },
        UserCode = 2,
        ImageRoute = "../../../../assets/images/food/salas.png"
    },
    new Recipe
    {
        Code = 4,
        Name = "Crazy Sushi",
        CategoryCode = 5,
        PreparationTime = 40,
        DifficultyLevel = 3,
        DateAddedToWebsite = new DateTime(2024, 05, 01),
        Ingredients = new List<string>{"Sushi rice", "Nori seaweed sheets", "Assorted vegetables (e.g., cucumber, avocado, carrot)", "Soy sauce", "Wasabi", "Pickled ginger"},
        Preparation = new List<string>
        {
            "Prepare sushi rice according to package instructions and let it cool.",
            "Slice vegetables into thin strips.",
            "Place a sheet of nori on a bamboo sushi mat, shiny side down.",
            "Spread a thin layer of rice evenly over the nori, leaving about 1 inch uncovered at the top.",
            "Arrange vegetable strips along the bottom edge of the rice.",
            "Roll the sushi tightly using the bamboo mat, starting from the bottom.",
            "Slice the sushi roll into bite-sized pieces using a sharp knife.",
            "Serve with soy sauce, wasabi, and pickled ginger."
        },
        UserCode = 2,
        ImageRoute = "../../../../assets/images/food/sushi.jpg"
    },
     new Recipe
    {
        Code = 5,
        Name = "Juicy salmon",
        CategoryCode = 5,
        PreparationTime = 30,
        DifficultyLevel = 2,
        DateAddedToWebsite = new DateTime(2023, 12, 01),
         Ingredients = new List<string>
        {
            "Salmon fillets",
            "Olive oil",
            "Lemon juice",
            "Garlic cloves, minced",
            "Fresh herbs (e.g., dill, parsley, thyme)",
            "Salt",
            "Black pepper",
            "Lemon slices (for garnish)"
        },
        Preparation = new List<string>
        {
            "Preheat oven to 400°F (200°C).",
            "In a small bowl, mix together olive oil, lemon juice, minced garlic, chopped fresh herbs, salt, and black pepper.",
            "Place salmon fillets on a baking sheet lined with parchment paper.",
            "Brush the olive oil mixture over the salmon fillets, coating them evenly.",
            "Arrange lemon slices on top of the salmon.",
            "Bake in preheated oven for 12-15 minutes, or until salmon is cooked through and flakes easily with a fork.",
            "Serve hot with your favorite side dishes."
        },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/food/7.jpg"
    },
     new Recipe
    {
        Code = 6,
        Name = "Dream pizza",
        CategoryCode = 6,
        PreparationTime = 40,
        DifficultyLevel = 3,
        DateAddedToWebsite = new DateTime(2022, 07, 01),
        Ingredients = new List<string>
        {
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella cheese",
            "Toppings of your choice (e.g., pepperoni, mushrooms, onions, bell peppers, olives)",
            "Fresh basil leaves",
            "Olive oil",
            "Salt",
            "Black pepper"
        },
        Preparation = new List<string>
        {
            "Preheat oven to 475°F (245°C).",
            "Roll out the pizza dough on a floured surface to your desired thickness.",
            "Transfer the dough to a pizza pan or baking sheet lined with parchment paper.",
            "Spread a thin layer of tomato sauce over the dough, leaving a border around the edges.",
            "Sprinkle shredded mozzarella cheese evenly over the sauce.",
            "Add your desired toppings on top of the cheese.",
            "Drizzle olive oil over the pizza and season with salt and black pepper.",
            "Bake in preheated oven for 12-15 minutes, or until the crust is golden brown and the cheese is bubbly and melted.",
            "Remove from oven and garnish with fresh basil leaves before serving."
        },
        UserCode = 2,
        ImageRoute = "../../../../assets/images/food/pizza.jpg"
    },
        new Recipe
    {
        Code = 7,
        Name = "Tender meat",
        CategoryCode = 9,
        PreparationTime = 180,
        DifficultyLevel = 2,
        DateAddedToWebsite = new DateTime(2024, 01, 01),
        Ingredients = new List<string>
        {
            "Beef tenderloin",
            "Olive oil",
            "Salt",
            "Black pepper",
            "Garlic cloves, minced",
            "Fresh rosemary sprigs",
            "Fresh thyme sprigs",
            "Butter"
        },
        Preparation = new List<string>
        {
            "Preheat oven to 400°F (200°C).",
            "Rub the beef tenderloin with olive oil and season generously with salt and black pepper.",
            "Heat a large skillet over medium-high heat and sear the beef tenderloin on all sides until browned.",
            "Transfer the seared beef tenderloin to a roasting pan.",
            "Rub minced garlic over the beef tenderloin and place fresh rosemary and thyme sprigs on top.",
            "Roast in preheated oven for about 15 minutes per pound, or until the internal temperature reaches your desired level of doneness.",
            "Remove from oven and let the beef tenderloin rest for 10 minutes before slicing.",
            "Serve hot with melted butter drizzled over the slices."
        },
        UserCode = 2,
        ImageRoute = "../../../../assets/images/food/meat.jpg"
    },
       new Recipe
    {
        Code = 8,
        Name = "Meat with potatoes",
        CategoryCode = 9,
        PreparationTime = 40,
        DifficultyLevel = 3,
        DateAddedToWebsite = new DateTime(2023, 06, 01),
        Ingredients = new List<string>
        {
            "Beef or chicken pieces",
            "Potatoes, peeled and diced",
            "Onion, chopped",
            "Garlic cloves, minced",
            "Carrots, sliced",
            "Fresh rosemary sprigs",
            "Olive oil",
            "Salt",
            "Black pepper"
        },
        Preparation = new List<string>
        {
            "Preheat oven to 375°F (190°C).",
            "In a large mixing bowl, toss together the beef or chicken pieces, diced potatoes, chopped onion, minced garlic, and sliced carrots.",
            "Drizzle olive oil over the mixture and season with salt, black pepper, and fresh rosemary leaves.",
            "Spread the mixture evenly in a baking dish or roasting pan.",
            "Cover the dish with foil and bake in preheated oven for about 30 minutes.",
            "Remove the foil and continue baking for an additional 10-15 minutes, or until the meat is cooked through and the potatoes are tender.",
            "Serve hot, garnished with additional fresh herbs if desired."
        },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/food/chicken.jpg"
    },
          new Recipe
    {
        Code = 9,
        Name = "Brown bread",
        CategoryCode = 6,
        PreparationTime = 50,
        DifficultyLevel = 1,
        DateAddedToWebsite = new DateTime(2023, 01, 10),
        Ingredients = new List<string>
        {
            "Plain yogurt",
            "Fresh strawberries, hulled and sliced",
            "Honey or maple syrup (optional)"
        },
        Preparation = new List<string>
        {
            "In a blender, combine the plain yogurt and sliced strawberries.",
            "Add honey or maple syrup to sweeten, if desired.",
            "Blend until smooth and well combined.",
            "Pour the mixture into popsicle molds.",
            "Insert popsicle sticks into the molds.",
            "Place the molds in the freezer and freeze for at least 4 hours, or until the popsicles are completely frozen.",
            "Once frozen, remove the popsicles from the molds and serve immediately.",
            "Enjoy your refreshing yogurt popsicles with strawberries!"
        },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/food/bread.jpg"
    },
                    new Recipe
    {
        Code = 10,
        Name = "Sweet potato and mushroom quiche",
        CategoryCode = 1,
        PreparationTime =40,
        DifficultyLevel=2,
        DateAddedToWebsite = new DateTime(2024, 01, 10),
                 Ingredients = new List<string>
                 {
                   "white flour",
                   "cold butter",
                   "sugar",
                   "grated parmesan",
                   "salt",
                   "egg"
                 },
                 Preparation = new List<string>
                 {
                   "Place flour, butter, salt, sugar and parmesan in a food processor and process until a fine crumbly mixture is obtained.",

                   "Add an egg and process in pulses to large, moist crumbs. If the dough is dry, add a spoonful of water while mixing just until the dough starts to come together.",

                  "Gather the dough into a ball, wrap in cling film and leave for half an hour in the refrigerator.",

                  "Heat the oven to 180 degrees."
        },
                 UserCode = 1,
                 ImageRoute = "../../../../assets/images/food/Kish.jpg"
               },
                          new Recipe
    {
        Code = 11,
        Name = "3 layer cheesecake",
        CategoryCode = 3,
        PreparationTime =35,
        DifficultyLevel=3,
        DateAddedToWebsite = new DateTime(2024, 01, 25),
                 Ingredients = new List<string>
                 {
                  "200 grams of vanilla biscuits.",
                   "50 grams of melted butter.",
                   "2 L eggs at room temperature.",
                   "60 grams of sugar (1/4 cup).",
                   "10 grams of cornflour (tablespoon).",
                   "teaspoon of vanilla extract."
                 },
                 Preparation = new List<string>
                 {
                   "Heat the oven to 180 degrees.",

                   "In a food processor with a steel blade, grind the biscuits to a powder, and mix with the melted butter.",

                  "Line the bottom of the herring with baking paper.",

                  "wrap the outside of the mold with foil."
        },
                 UserCode = 2,
                 ImageRoute = "../../../../assets/images/food/שמנת.jpg"
               },




  };
    // GET: api/<CategoryController>
    [HttpGet]
    public ActionResult<IEnumerable<Recipe>> Get()
    {
      return Ok(recipes);
    }

    // GET api/<CategoryController>/5
    [HttpGet("{id}")]
    public ActionResult<Recipe> Get(int id)
    {
      var recipe = recipes.Find(c => c.Code == id);
      if (recipe == null)
        return NotFound();
      return Ok(recipe);
    }

    // POST api/<CategoryController>
    [HttpPost]
    public void Post([FromBody] Recipe recipe)
    {
      recipe.Code = recipes[recipes.Count() - 1].Code + 1;

      recipes.Add(recipe);
    }

    // PUT api/<CategoryController>/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] Recipe recipe)
    {
      Recipe recipeForUpdating = recipes.Find(c => c.Code == id);
      if (recipeForUpdating == null)
        return NotFound();
      recipeForUpdating.Name = recipe.Name;
      recipeForUpdating.CategoryCode = recipe.CategoryCode;
      recipeForUpdating.PreparationTime = recipe.PreparationTime;
      recipeForUpdating.DifficultyLevel = recipe.DifficultyLevel;
      recipeForUpdating.DateAddedToWebsite = recipe.DateAddedToWebsite;
      recipeForUpdating.Ingredients = recipe.Ingredients;
      recipeForUpdating.Preparation = recipe.Preparation;
      recipeForUpdating.UserCode = recipe.UserCode;
      recipeForUpdating.ImageRoute = recipe.ImageRoute;
      return NoContent();
    }

    // DELETE api/<CategoryController>/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      Recipe recipeForDeleting = recipes.Find(c => c.Code == id);
      if (recipeForDeleting == null)
        return NotFound();
      recipes.Remove(recipeForDeleting);
      return NoContent();
    }
  }
}
