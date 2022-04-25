import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RecipesSectionMain } from "./RecipesSectionStyles";

type RecipesType = {
  id: number;
  image: string;
  imageType: string;
  title: string;
};

type RecipesResultType = {
  results: RecipesType[];
  offset: number;
  number: number;
  totalResults: number;
};

export function RecipesSection() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [recipes, setRecipes] = useState<RecipesResultType>({
    results: [],
    offset: 0,
    number: 0,
    totalResults: 0,
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
    document.title = "Healthy | Recipes section";
  }, []);

  return (
    <RecipesSectionMain>
      <section className="search-recipes-container">
        <h1 className="search-title">Search for recipes</h1>

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
            Search
          </button>
        </form>

        <div className="recipes-section">
          {recipes.results.map((recipe) => {
            return (
              <Link
                to={`/recipes/${recipe.id}`}
                target="_blank"
                rel="noopener noreferrer"
                key={recipe.id}
              >
                <div>
                  <img src={recipe.image} alt={recipe.title} />

                  <hr />

                  <h1>
                    {recipe.title.split(" ").filter((n) => n !== "").length > 6
                      ? recipe.title.split(" ").slice(0, 5).join(" ") + "..."
                      : recipe.title}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </RecipesSectionMain>
  );
}
