export default function ProductTable({ item }) {
    return (
      <div className="product-table-row">
        <div>{item.name}</div>
        <div>{item.category}</div>
        <div>${item.price}</div>
        <div>{item.inStock ? "有庫存" : "缺貨"}</div>
      </div>
    );
  }
  