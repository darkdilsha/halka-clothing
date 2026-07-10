import "./ProductCard.css";

function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <h3>{name}</h3>

        <p className="price">
          ₹{Number(price).toLocaleString("en-IN")}
        </p>

        <button>Add to Bag</button>
      </div>
    </div>
  );
}

export default ProductCard;