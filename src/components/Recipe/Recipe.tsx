import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
  title: string;
  vegan: boolean;
  vegetarian: boolean;
};

const initialState = {
  dairyFree: false,
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
  title: "",
  vegan: false,
  vegetarian: false,
};

export function Recipe() {
  const recipeId = useLocation().pathname.slice(9);
  const [recipe, setRecipe] = useState<RecipeType>(initialState);

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
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=9732f1faad824738bf0f4151421f22e1`
    )
      .then((res) => res.json())
      .then((data: RecipeType) => {
        setRecipe(data);
      });
  }, [recipeId]);

  return (
    <>
      <Helmet>
        <title>
          Healthy |{" "}
          {recipe !== initialState ? recipe.title : `Recipe ${recipeId}`}
        </title>
        <link rel="icon" href="/assets/recipes-logo.svg" />
      </Helmet>

      <RecipeSectionContainer>
        <div className="recipe-information-container">
          <div className="recipe-information-content">
            <h1>{recipe !== initialState ? recipe.title : "--"}</h1>

            <div className="recipe-info">
              <div className="recipe-section-1">
                <div className="ingredients">
                  <h2>
                    <i className="fa-regular fa-leafy-green"></i> Ingredients
                  </h2>

                  <ul>
                    {recipe !== initialState
                      ? recipe.nutrition.ingredients.map((ingredient) => {
                          return (
                            <li key={ingredient.name}>
                              {ingredient.name.charAt(0).toUpperCase() +
                                ingredient.name.slice(
                                  1,
                                  ingredient.name.length
                                )}
                            </li>
                          );
                        })
                      : "--"}
                  </ul>
                </div>

                <div className="general-info">
                  <h2>
                    <i className="fa-solid fa-circle-info"></i> General Info
                  </h2>

                  <ul>
                    <li>
                      Dairy free: {recipe.dairyFree === true ? "yes" : "no"}
                    </li>
                    <li>
                      Gluten free: {recipe.glutenFree === true ? "yes" : "no"}
                    </li>
                    <li>Vegan: {recipe.vegan === true ? "yes" : "no"}</li>
                    <li>
                      Vegetarian: {recipe.vegetarian === true ? "yes" : "no"}
                    </li>
                    <li>
                      Dish type(s):{" "}
                      {recipe.dishTypes.length >= 1
                        ? recipe.dishTypes.join(", ")
                        : "--"}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="recipe-section-2">
                <div className="instructions">
                  <h2>
                    <i className="fa-solid fa-book"></i> Instructions
                  </h2>

                  <p>
                    {recipe !== initialState
                      ? recipe.instructions
                          .replaceAll("<ol>", "")
                          .replaceAll("</ol>", "")
                          .replaceAll("<li>", " ")
                          .replaceAll("</li>", "")
                          .replaceAll("<span>", "")
                          .replaceAll("</span>", "")
                          .replaceAll("<div>", "")
                          .replaceAll("</div>", "")
                      : "--"}
                  </p>
                </div>

                <div className="nutritional-info">
                  <h2>
                    <i className="fa-regular fa-capsules"></i> Nutritional Info
                  </h2>

                  <ul>
                    <li>
                      Calories:{" "}
                      {recipe !== initialState
                        ? `${calories[0].amount}${calories[0].unit}`
                        : "--"}
                    </li>
                    <li>
                      Fat:{" "}
                      {recipe !== initialState
                        ? `${fat[0].amount}${fat[0].unit}`
                        : "--"}
                    </li>
                    <li>
                      Saturated fat:{" "}
                      {recipe !== initialState
                        ? `${saturatedFat[0].amount}${saturatedFat[0].unit}`
                        : "--"}
                    </li>
                    <li>
                      Carbohydrates:{" "}
                      {recipe !== initialState
                        ? `${carbohydrates[0].amount}${carbohydrates[0].unit}`
                        : "--"}
                    </li>
                    <li>
                      Sugar:{" "}
                      {recipe !== initialState
                        ? `${sugar[0].amount}${sugar[0].unit}`
                        : "--"}
                    </li>
                    <li>
                      Cholesterol:{" "}
                      {recipe !== initialState
                        ? `${cholesterol[0].amount}${cholesterol[0].unit}`
                        : "--"}
                    </li>
                    <li>
                      Protein:{" "}
                      {recipe !== initialState
                        ? `${protein[0].amount}${protein[0].unit}`
                        : "--"}
                    </li>
                    <li>
                      Fiber:{" "}
                      {recipe !== initialState
                        ? `${fiber[0].amount}${fiber[0].unit}`
                        : "--"}
                    </li>
                    <li>
                      Vitamin C:{" "}
                      {recipe !== initialState
                        ? `${vitaminC[0].amount}${vitaminC[0].unit}`
                        : "--"}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="recipe-img">
            <img
              src={
                recipe !== initialState
                  ? recipe.image
                  : `${process.env.PUBLIC_URL}/assets/tray.png`
              }
              alt={recipe !== initialState ? recipe.title : ""}
            />

            <p>
              Ready in {recipe !== initialState ? recipe.readyInMinutes : "--"}{" "}
              minutes.
            </p>
          </div>
        </div>
      </RecipeSectionContainer>
    </>
  );
}
