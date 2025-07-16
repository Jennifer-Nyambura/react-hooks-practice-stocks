import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("");      // "" | "Alphabetically" | "Price"
  const [filterBy, setFilterBy] = useState("All"); // "All" | "Tech" | "Finance" | ...

  // Fetch stocks from API
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  // Add stock to portfolio
  function addToPortfolio(stock) {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  // Remove stock from portfolio
  function removeFromPortfolio(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  }

  return (
    <div>
      <Header />
      <MainContainer
        stocks={stocks}
        portfolio={portfolio}
        onBuy={addToPortfolio}
        onSell={removeFromPortfolio}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </div>
  );
}

export default App;
