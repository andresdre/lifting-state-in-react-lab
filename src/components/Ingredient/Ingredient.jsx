// src/components/Ingredient/Ingredient.jsx

const Ingredient = ({ ingredient, onClick, isInStack }) => {
    return (
      <li style={{ backgroundColor: ingredient.color, padding: '10px', margin: '5px', listStyle: 'none' }}>
        {ingredient.name}
        <button onClick={onClick} style={{ marginLeft: '10px' }}>
          {isInStack ? "X" : "+"}
        </button>
      </li>
    );
  };
  
  export default Ingredient;
  