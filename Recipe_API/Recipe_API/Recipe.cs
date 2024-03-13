namespace Recipe_API
{
  //public enum Level
  //{
  //    Level1 = 1,
  //    Level2 = 2,
  //    Level3 = 3,
  //    Level4 = 4,
  //    Level5 = 5,

  //}

  public class Recipe
  {
    public int Code { get; set; }
    public string Name { get; set; }
    public int CategoryCode { get; set; }
    public int PreparationTime { get; set; }
    public int DifficultyLevel { get; set; }
    public DateTime DateAddedToWebsite { get; set; }

    public List<string> Ingredients { get; set; }
    public List<string> Preparation { get; set; }
    public int UserCode { get; set; }
    public string ImageRoute { get; set; }

  }
}
