import React from "react";

function Stock({ stock, onStockClick }) {
  const { name, price, ticker, type } = stock;

  return (
    <div className="card" onClick={() => onStockClick(stock)}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{ticker} - ${price}</p>
        <p className="card-text">{type}</p>
      </div>
    </div>
  );
}

export default Stock;
