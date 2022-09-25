
import { useState } from 'react';
import './App.css';
import Category from './components/Categories';
import Menu from './components/Menu';
import items from './data'


function App() {
  // State //

  const [foodMenu, setFoodMenu] = useState(items);

  // comportment //
  const handlefilterFood = (category)=>{
    if(category === 'all'){
      setFoodMenu(items);
      return;
    }
    const foodFilted =  items.filter(item => category === item.category);
    setFoodMenu(foodFilted);
  
  }

// Return //
  return (
    <div className="App">
      <h1>Chinese Food Menu</h1>
      <Category  handlefilterFood={handlefilterFood}/>
      <Menu  foodMenu={foodMenu}/>
 
    </div>
  );
}

export default App;
