
// export class Recipe {
//     static nextCode: number = 0; // הקוד הבא שיעודכן בהתאם לקוד המתכון הבא

//     code: number;
//     name: string;
//     categoryCode: number;
//     preparationTime: number;
//     difficultyLevel: number;
//     dateAddedToWebsite: Date;
//     ingredients: Array<string>;
//     preparation: Array<string>;
//     userCode: number;
//     imageRoute: string;

//     constructor(
//         name: string,
//         categoryCode: number,
//         preparationTime: number,
//         difficultyLevel: number,
//         dateAddedToWebsite: Date,
//         ingredients: Array<string>,
//         preparation: Array<string>,
//         userCode: number,
//         imageRoute: string
//     ) {
//         this.code = Recipe.nextCode++; // הגדרת הקוד על ידי הקוד הבא והעלאתו בערך
//         this.name = name;
//         this.categoryCode = categoryCode;
//         this.preparationTime = preparationTime;
//         this.difficultyLevel = difficultyLevel;
//         this.dateAddedToWebsite = dateAddedToWebsite;
//         this.ingredients = ingredients;
//         this.preparation = preparation;
//         this.userCode = userCode;
//         this.imageRoute = imageRoute;
//     }
// }

export class Recipe {
    public code: number;
    public name: string;
    public categoryCode: number;
    public preparationTime: number;
    public difficultyLevel: number;
    public   dateAddedToWebsite !: Date;
    public ingredients: string[];
    public preparation: string[];
    public userCode: number;
    public imageRoute: string;
  
    constructor(
        code: number,
       name: string,
        categoryCode: number,
        preparationTime: number,
        difficultyLevel: number,
         dateAddedToWebsite : Date,
        ingredients: string[],
        preparation: string[],
        userCode: number,
        imageRoute: string,
    ) {
      this.code = code;
      this.name = name;
      this.categoryCode = categoryCode;
      this.preparationTime = preparationTime;
      this.difficultyLevel = difficultyLevel;
      this.dateAddedToWebsite = dateAddedToWebsite;
      this.ingredients = ingredients;
      this.preparation = preparation;
      this.userCode = userCode;
      this.imageRoute = imageRoute;
    }
  }
  
