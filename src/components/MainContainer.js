import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({
  stocks,
  portfolio,
  onBuy,
  onSell,
  sortBy,
  setSortBy,
  filterBy,
  setFilterBy,
}) {
  return (
    <div>
      <SearchBar sortBy={sortBy} setSortBy={setSortBy} filterBy={filterBy} setFilterBy={setFilterBy} />
      <div className="row">
        <div className="col">
          <h2>Stocks</h2>
          <StockContainer stocks={stocks} onStockClick={onBuy} sortBy={sortBy} filterBy={filterBy} />
        </div>
        <div className="col">
          <h2>My Portfolio</h2>
          <PortfolioContainer portfolio={portfolio} onStockClick={onSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
