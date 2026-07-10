import "./CategoryCard.css";

function CategoryCard(props) {
  return (
    <div className="category-card">
      <img src={props.image} alt={props.name} />

      <div className="overlay">
        <h3>{props.name}</h3>
       
      </div>
    </div>
  );
}

export default CategoryCard;