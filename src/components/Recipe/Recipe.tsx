import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RecipeSectionContainer } from "./RecipeStyles";

type Ingredients = {
  name: string;
};

type Nutrients = {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds: number;
};

type RecipeType = {
  dairyFree: boolean;
  diets: string[];
  dishTypes: string[];
  glutenFree: boolean;
  id: number;
  image: string;
  instructions: string;
  nutrition: {
    caloricBreakDown: {
      percentProtein: number;
      percentFat: number;
      percentCarbs: number;
    };
    ingredients: Ingredients[];
    nutrients: Nutrients[];
  };
  readyInMinutes: number;
  sustainable: boolean;
  title: string;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
};

export function Recipe() {
  const recipeId = useLocation().pathname.slice(9);
  const [recipe, setRecipe] = useState<RecipeType>({
    dairyFree: false,
    diets: [],
    dishTypes: [],
    glutenFree: false,
    id: 0,
    image: "",
    instructions: "",
    nutrition: {
      caloricBreakDown: {
        percentProtein: 0,
        percentFat: 0,
        percentCarbs: 0,
      },
      ingredients: [],
      nutrients: [],
    },
    readyInMinutes: 0,
    sustainable: false,
    title: "",
    vegan: false,
    vegetarian: false,
    veryHealthy: false,
  });

  const calories = recipe.nutrition.nutrients.filter(
    (nutrient) => nutrient.name === "Calories"
  );
  const fat = recipe.nutrition.nutrients.filter(
    (nutrient) => nutrient.name === "Fat"
  );
  const saturatedFat = recipe.nutrition.nutrients.filter(
    (nutrient) => nutrient.name === "Saturated Fat"
  );
  const carbohydrates = recipe.nutrition.nutrients.filter(
    (nutrient) => nutrient.name === "Carbohydrates"
  );
  const sugar = recipe.nutrition.nutrients.filter(
    (nutrient) => nutrient.name === "Sugar"
  );
  const cholesterol = recipe.nutrition.nutrients.filter(
    (nutrient) => nutrient.name === "Cholesterol"
  );
  const protein = recipe.nutrition.nutrients.filter(
    (nutrient) => nutrient.name === "Protein"
  );
  const fiber = recipe.nutrition.nutrients.filter(
    (nutrient) => nutrient.name === "Fiber"
  );
  const vitaminC = recipe.nutrition.nutrients.filter(
    (nutrient) => nutrient.name === "Vitamin C"
  );

  useEffect(() => {
    document.title = "Healthy | Recipes";

    // fetch(
    //   `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=9732f1faad824738bf0f4151421f22e1`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setRecipe(data);
    //   });
  }, [recipeId]);

  return (
    <RecipeSectionContainer>
      <div className="recipe-information-container">
        <div className="recipe-information-content">
          <h1>{recipe.title ? recipe.title : "--"}</h1>

          <div className="recipe-info">
            <div className="recipe-section-1">
              <div className="ingredients">
                <h2>Ingredients</h2>

                <ul>
                  {recipe.title
                    ? recipe.nutrition.ingredients.map((ingredient) => {
                        return <li key={recipe.id}>{ingredient.name}</li>;
                      })
                    : "--"}
                </ul>
              </div>

              <div className="general-info">
                <h2>General Info</h2>

                <ul>
                  <li>Dairy free: {recipe.dairyFree === true ? "Yes" : "No" }</li>
                  <li>Gluten free: {recipe.glutenFree === true ? "Yes" : "No" }</li>
                  <li>Vegan: {recipe.vegan === true ? "Yes" : "No" }</li>
                  <li>Vegetarian: {recipe.vegetarian === true ? "Yes" : "No" }</li>
                  <li>Sustainable: {recipe.sustainable === true ? "Yes" : "No" }</li>
                  <li>Very healthy: {recipe.veryHealthy === true ? "Yes" : "No" }</li>
                  <li>Diets:</li>
                  <li>Dish types:</li>
                </ul>
              </div>
            </div>

            <div className="recipe-section-2">
              <div className="instructions">
                <h2>Instructions</h2>

                <p>{recipe.instructions ? recipe.instructions.replace(/[<ol><li><span>]/g, "") : "--"}</p>
              </div>

              <div className="nutritional-info">
                <h2>Nutritional Info</h2>

                <ul>
                  <li>
                    Calories:{" "}
                    {calories[0]
                      ? `${calories[0].amount}${calories[0].unit}`
                      : "--"}
                  </li>
                  <li>
                    Fat: {fat[0] ? `${fat[0].amount}${fat[0].unit}` : "--"}
                  </li>
                  <li>
                    Saturated fat:{" "}
                    {saturatedFat[0]
                      ? `${saturatedFat[0].amount}${saturatedFat[0].unit}`
                      : "--"}
                  </li>
                  <li>
                    Carbohydrates:{" "}
                    {carbohydrates[0]
                      ? `${carbohydrates[0].amount}${carbohydrates[0].unit}`
                      : "--"}
                  </li>
                  <li>
                    Sugar:{" "}
                    {sugar[0] ? `${sugar[0].amount}${sugar[0].unit}` : "--"}
                  </li>
                  <li>
                    Cholesterol:{" "}
                    {cholesterol[0]
                      ? `${cholesterol[0].amount}${cholesterol[0].unit}`
                      : "--"}
                  </li>
                  <li>
                    Protein:{" "}
                    {protein[0]
                      ? `${protein[0].amount}${protein[0].unit}`
                      : "--"}
                  </li>
                  <li>
                    Fiber:{" "}
                    {fiber[0] ? `${fiber[0].amount}${fiber[0].unit}` : "--"}
                  </li>
                  <li>
                    Vitamin C:{" "}
                    {vitaminC[0]
                      ? `${vitaminC[0].amount}${vitaminC[0].unit}`
                      : "--"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="recipe-img">
          <img src={recipe.image ? recipe.image : "/assets/tray.png"} alt={recipe.title} />

          <p>
            It gets ready in{" "}
            {recipe.readyInMinutes ? recipe.readyInMinutes : "--"} minutes.
          </p>
        </div>
      </div>

      <div className="similar-recipes-section"></div>
    </RecipeSectionContainer>
  );
}
