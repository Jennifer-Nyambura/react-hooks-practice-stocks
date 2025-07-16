import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockClick, sortBy, filterBy }) {
  // Apply filter
  let filteredStocks = stocks;
  if (filterBy !== "All") {
    filteredStocks = filteredStocks.filter(stock => stock.type === filterBy);
  }

  // Apply sort
  if (sortBy === "Alphabetically") {
    filteredStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
  } else if (sortBy === "Price") {
    filteredStocks.sort((a, b) => a.price - b.price);
  }

  return (
    <div>
      {filteredStocks.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          onStockClick={onStockClick}
        />
      ))}
    </div>
  );
}

export default StockContainer;
