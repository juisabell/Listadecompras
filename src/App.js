import React, { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import PurchasedList from './components/PurchasedList';

function App() {
  const [items, setItems] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const addItem = (item) => {
    if (item) {
      setItems([...items, { name: item, purchased: false }]);
      document.getElementById('newItem').value = '';
    }
  };

  const moveToPurchased = (index) => {
    const itemToMove = items[index];
    itemToMove.purchased = true;
    setPurchasedItems([...purchasedItems, itemToMove]);
    setItems(items.filter((_, i) => i !== index));
  };

  const deleteItem = (index, list, setList) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="App">
      <h1>Lista de compras</h1>
      <input type="text" id="newItem" placeholder="Digite o item que deseja adicionar" />
      <button onClick={() => addItem(document.getElementById('newItem').value)}>Salvar item</button>
      <ShoppingList items={items} moveToPurchased={moveToPurchased} deleteItem={deleteItem} />
      <PurchasedList items={purchasedItems} deleteItem={deleteItem} />
    </div>
  );
}

export default App;


