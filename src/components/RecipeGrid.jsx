import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";
import "../styles/RecipeGrid.css";

function RecipeGrid() {
  return (
    <section className="recipe-grid">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </section>
  );
}

export default RecipeGrid;