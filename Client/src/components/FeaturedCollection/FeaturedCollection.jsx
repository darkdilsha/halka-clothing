import "./FeaturedCollection.css";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";

function FeaturedCollection() {
  return (
    <section className="featured section">

      <div className="featured-header">
        <h2>Featured Collection</h2>

<p>
  Discover carefully curated styles designed
  for every occasion.
</p>
      </div>

      <div className="featured-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>

      <button className="view-all-btn">
        View All Collections →
      </button>

    </section>
  );
}

export default FeaturedCollection;