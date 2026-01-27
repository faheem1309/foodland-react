import "../styles/RecipeCard.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-info">
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <span className="price">{recipe.price}</span>
      </div>
    </div>
  );
}

export default RecipeCard;