import CategoryCard from "./CategoryCard";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Skincare",
      description: "Serums, creams and daily essentials",
    },
    {
      id: 2,
      name: "Makeup",
      description: "Lipsticks, foundations and more",
    },
    {
      id: 3,
      name: "Body Care",
      description: "Everyday care for your skin",
    },
  ];

  return (
    <section className="categories">
      <div className="section-heading">
        <p>SHOP BY CATEGORY</p>

        <h2>Find what you need</h2>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            description={category.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;
