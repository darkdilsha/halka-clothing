
import "./Categories.css";
import CategoryCard from "../CategoryCard/CategoryCard";

import kurti from "../../assets/images/kurti.jpeg";
import saree from "../../assets/images/saree.jpeg";
import western from "../../assets/images/western.jpeg";
import nightwear from "../../assets/images/nightwear.jpeg";

function Categories() {
  return (
    <section className="categories section">
      <h2>Shop by Category</h2>
      <div className="category-grid">
  <CategoryCard
    name="KURTIS          →"
    image={kurti}
  />

  <CategoryCard
    name="SAREES"
    image={saree}
  />

  <CategoryCard
    name="WESTERN WEAR"
    image={western}
  />

  <CategoryCard
    name="NIGHT WEAR"
    image={nightwear}
  />
</div>

     
    </section>
  );
}

export default Categories;