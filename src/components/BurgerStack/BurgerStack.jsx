// src/components/BurgerStack/BurgerStack.jsx
import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ ingredients, handleRemoveIngredient }) => {
    console.log("Stack ingredients:", ingredients);
  return (
    <ul>
      {ingredients.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient 
            key={index} 
            ingredient={ingredient} 
            onClick={() => handleRemoveIngredient(index)}
            isInStack={true} 
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
