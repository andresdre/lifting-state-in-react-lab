// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ ingredients, handleRemoveIngredient }) => {
    return (
        <div>
            {ingredients.length === 0 ? (
                <p>No Ingredients</p>
            ) : (
            <ul>
                {ingredients.map((ingredients, index) => (
                    <li key={index} style={{ backgroundColor: ingredients.color}}>
                        {ingredients.name}
                        <button onClick={() => handleRemoveIngredient(index)}>X</button>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default BurgerStack;
