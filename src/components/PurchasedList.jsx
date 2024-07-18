import React from 'react';

function PurchasedList({ items, deleteItem }) {
  return (
    <div className="list-container">
      <h2>Comprados</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.purchased ? 'purchased' : ''}>
            <input type="checkbox" checked={item.purchased} readOnly />
            {item.name}
            <button onClick={() => deleteItem(index, items, deleteItem)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PurchasedList;

