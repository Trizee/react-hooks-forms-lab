import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [name,setNewName] = useState('')
  const [category,setNewCat] = useState('Produce')

  // const newItem = {
    
  // };

  function addName(e){
    setNewName(e.target.value)
  }

  function addCat(e){
    setNewCat(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name,
      category,
    });
  }



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={addName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={addCat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
