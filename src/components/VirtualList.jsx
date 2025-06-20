import React from "react";
import { FixedSizeList as List } from "react-window";
import ProductCard from "./ProductCard";
import ProductTable from "./ProductTable";

export default function VirtualList({ items, isMobile }) {
  if (items.length === 0) return <p>沒有符合的項目</p>;

  return isMobile ? (
    <div className="mobile-grid">
      {items.map((item, i) => (
        <ProductCard key={i} item={item} />
      ))}
    </div>
  ) : (
    <div>
      <div className="product-table-header">
        <div>名稱</div>
        <div>類別</div>
        <div>價格</div>
        <div>庫存</div>
      </div>
      <List
        height={500}
        itemCount={items.length}
        itemSize={60}
        width="100%"
      >
        {({ index, style }) => (
          <div style={style}>
            <ProductTable item={items[index]} />
          </div>
        )}
      </List>
    </div>
  );
}
