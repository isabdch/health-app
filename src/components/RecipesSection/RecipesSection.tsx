import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { recipesContext, RecipesResultType } from "../../hooks/recipesHook";
import { RecipesSectionMain } from "./RecipesSectionStyles";

export function RecipesSection() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [recipes, setRecipes] = useContext(recipesContext);

  function searchRecipes() {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&number=100&apiKey=9732f1faad824738bf0f4151421f22e1`
    )
      .then((res) => res.json())
      .then((data: RecipesResultType) => {
        setRecipes(data);
      });
  }

  useEffect(() => {
    document.title = "healthy | recipes section";
  }, []);

  return (
    <RecipesSectionMain>
      <section className="recipes-suggestions section-1"></section>

      <section className="search-recipes-container">
        <h1>Search for recipes</h1>

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
              searchRecipes();
              event.preventDefault();
            }}
            className="search-btn"
          >
            Search
          </button>
        </form>

        <div className="recipes-section">
          {recipes.results.map((recipe) => {
            return (
              <Link to={`/recipes/${recipe.id}`} target="_blank" rel="noopener noreferrer">
                <div id={`${recipe.id}`}>
                  <h1>{recipe.title}</h1>
                  <img src={recipe.image} alt={recipe.title} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="recipes-suggestions section-2"></section>
    </RecipesSectionMain>
  );
}
