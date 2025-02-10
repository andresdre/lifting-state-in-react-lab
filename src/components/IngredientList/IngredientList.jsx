// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredients, handleAddIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient 
          key={index} 
          ingredient={ingredient} 
          onClick={() => handleAddIngredient(ingredient)}
          isInStack={false} 
        />
      ))}
    </ul>
  );
};

export default IngredientList;
