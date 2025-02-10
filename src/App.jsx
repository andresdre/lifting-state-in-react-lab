// src/App.jsx

import './App.css';
import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';

const App = () => {
  const [stack, setStack] = useState([]);

  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];
  

  const handleAddIngredient = (ingredient) => {
    setStack([...stack, ingredient]); 
  };

  const handleRemoveIngredient = (index) => {
    const newStack = stack.filter((_, i) => i !== index);
    setStack(newStack);
  };

  return (
    <main style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-start" }}>
      <section style={{ width: "40%"}}>
        <h2>Ingredients</h2>
        <IngredientList 
          ingredients={availableIngredients}
          handleAddIngredient={handleAddIngredient}
        />
      </section>
      
      <section style={{ width: "40%"}}>
        <h2>Burger Stacker</h2>
        <BurgerStack 
          ingredients={stack} 
          handleRemoveIngredient={handleRemoveIngredient} 
        />
      </section>
    </main>
  );
};

export default App;
