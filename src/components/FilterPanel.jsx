import React from "react";

const uniqueCategories = (items) => [...new Set(items.map((item) => item.category))];

export default function FilterPanel({ items, filters, setFilters }) {
  const categories = uniqueCategories(items);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "categories") {
      setFilters((prev) => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter((c) => c !== value),
      }));
    } else if (type === "checkbox") {
      setFilters((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="filter-panel">
      <input
        type="text"
        name="keyword"
        placeholder="搜尋名稱"
        value={filters.keyword}
        onChange={handleChange}
      />
  
      <div>
        {categories.map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              name="categories"
              value={cat}
              checked={filters.categories.includes(cat)}
              onChange={handleChange}
            />
            {cat}
          </label>
        ))}
      </div>
  
      <div>
        價格：
        <input type="number" name="minPrice" placeholder="最低" onChange={handleChange} />
        <input type="number" name="maxPrice" placeholder="最高" onChange={handleChange} />
      </div>
  
      <label>
        <input
          type="checkbox"
          name="inStockOnly"
          checked={filters.inStockOnly}
          onChange={handleChange}
        />
        僅顯示有庫存
      </label>
  
      <select name="sort" value={filters.sort} onChange={handleChange}>
        <option value="asc">價格升序</option>
        <option value="desc">價格降序</option>
      </select>
    </div>
  );
  
}
