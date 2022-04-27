import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RecipesSectionMain } from "./RecipesSectionStyles";

type RecipesType = {
  id: number;
  image: string;
  title: string;
};

type RecipesResultType = {
  results: RecipesType[];
};

type RandomRecipes = {
  id: number;
  image: string;
  title: string;
};

type RandomRecipesResultType = {
  recipes: RandomRecipes[];
};

export function RecipesSection() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [randomRecipes, setRandomRecipes] = useState<RandomRecipesResultType>({
    recipes: [],
  });
  const [recipes, setRecipes] = useState<RecipesResultType>({
    results: [],
  });

  function searchRecipes() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&number=100&apiKey=9732f1faad824738bf0f4151421f22e1`
    )
      .then((res) => res.json())
      .then((data: RecipesResultType) => {
        setRecipes(data);
        setSearchInput("");
      });
  }

  useEffect(() => {
    document.title = "Healthy | Recipes";

    fetch(
      "https://api.spoonacular.com/recipes/random?&number=4&tags=vegan&apiKey=9732f1faad824738bf0f4151421f22e1"
    )
      .then((res) => res.json())
      .then((data) => setRandomRecipes(data));
  }, []);

  return (
    <RecipesSectionMain>
      <section className="search-recipes-container">
        <div className="search-section">
          <h1 className="search-title">Explore recipes</h1>
          <p>Healthy and delicious recipes for your diet!</p>
          <p>
            Get all information about the nutrients and calories each recipe
            has.
          </p>

          <form>
            <input
              autoFocus
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value);
              }}
              type="text"
            />
            <button
              onClick={(event) => {
                if (searchInput.trim()) {
                  searchRecipes();
                }
                event.preventDefault();
              }}
              className="search-btn"
            >
              <i className="fa-regular fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <div className="recipes-section">
          {recipes
            ? recipes.results.map((recipe) => {
                return (
                  <Link
                    to={`/recipes/${recipe.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={recipe.id}
                  >
                    <div>
                      <img src={recipe.image} alt={recipe.title} />

                      <h1>
                        {recipe.title.split(" ").filter((n) => n !== "")
                          .length > 6
                          ? recipe.title.split(" ").slice(0, 5).join(" ") +
                            "..."
                          : recipe.title}
                      </h1>
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
      </section>
      <section className="suggestions-section">
        <h2>Meals suggestions</h2>

        <div className="suggestions">
          {randomRecipes
            ? randomRecipes.recipes.map((recipe) => {
                return (
                  <Link
                    to={`/recipes/${recipe.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={recipe.id}
                  >
                    <div>
                      <img src={recipe.image} alt={recipe.title} />

                      <h1>
                        {recipe.title.split(" ").filter((n) => n !== "")
                          .length > 6
                          ? recipe.title.split(" ").slice(0, 5).join(" ") +
                            "..."
                          : recipe.title}
                      </h1>
                    </div>
                  </Link>
                );
              })
            : null}
        </div>
      </section>
    </RecipesSectionMain>
  );
}
