import React, { useEffect, useState } from "react";
import itemsData from "./data/items.json";
import FilterPanel from "./components/FilterPanel";
import VirtualList from "./components/VirtualList";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    categories: [],
    minPrice: 0,
    maxPrice: Infinity,
    inStockOnly: false,
    sort: "asc",
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setItems(itemsData);
  }, []);

  const filtered = items
    .filter((item) => {
      const keywordMatch = item.name.toLowerCase().includes(filters.keyword.toLowerCase());
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(item.category);
      const priceMatch = item.price >= filters.minPrice && item.price <= filters.maxPrice;
      const stockMatch = !filters.inStockOnly || item.inStock;
      return keywordMatch && categoryMatch && priceMatch && stockMatch;
    })
    .sort((a, b) =>
      filters.sort === "asc" ? a.price - b.price : b.price - a.price
    );

    return (
      <div className="container">
        <FilterPanel items={items} filters={filters} setFilters={setFilters} />
        <VirtualList items={filtered} isMobile={isMobile} />
      </div>
    );
    
}

export default App;
