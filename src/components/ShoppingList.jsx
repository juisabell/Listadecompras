import React from 'react';

function ShoppingList({ items, moveToPurchased, deleteItem }) {
  return (
    <div className="list-container">
      <h2>Lista de compras</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.purchased ? 'purchased' : ''}>
            <input type="checkbox" checked={item.purchased} onChange={() => moveToPurchased(index)} />
            {item.name}
            <button onClick={() => deleteItem(index, items, moveToPurchased)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

