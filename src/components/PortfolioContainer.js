import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onStockClick }) {
  return (
    <div>
      {portfolio.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          onStockClick={onStockClick}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
