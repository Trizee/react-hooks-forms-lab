import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items , onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [nameSearch , setNameSearch] = useState('All')



  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event){
    setNameSearch(event.target.value)
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All")  return true;
    return item.category === selectedCategory ;
  }).filter((item) => {
    if (nameSearch === "All")  return true;
    return item.name.toLowerCase().includes(nameSearch.toLowerCase()) ;
  });


  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );

}

export default ShoppingList;
