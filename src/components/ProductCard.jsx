export default function ProductCard({ item }) {
    return (
      <div className="product-card">
        <h2>{item.name}</h2>
        <p>類別: {item.category}</p>
        <p>價格: ${item.price}</p>
        <p>{item.inStock ? "有庫存" : "缺貨"}</p>
      </div>
    );
  }
  
  