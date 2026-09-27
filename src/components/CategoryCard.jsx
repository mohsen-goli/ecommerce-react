function CategoryCard({ name, description }) {
  return (
    <div className="category-card">
      <div className="category-image">{name}</div>

      <div className="category-info">
        <h3>{name}</h3>

        <p>{description}</p>

        <button>Explore</button>
      </div>
    </div>
  );
}

export default CategoryCard;
