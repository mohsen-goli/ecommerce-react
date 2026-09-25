function ProductCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Premium digital product</p>
      <strong>{props.price}</strong>
    </div>
  );
}

export default ProductCard;
