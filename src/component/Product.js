function Product(props) {
    const clickCart = () => {
        alert(`${props.name} Has been Added to Cart`)
    }
    const clickFave = () => {
        alert(`${props.name} Has been Added to Favorites`)
    }
  return (
    // image, name, description, price
    <div className="container">
      <img src={props.img} alt="product" width="200px" height="200px" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <h4>{props.price}</h4>
      <button className="btn" style={{ background: "black" }} onClick={clickCart}>
        Add to Cart
      </button>
      <button className="btn" style={{ background: "rgb(45, 151, 89)" }} onClick={clickFave}>
        Add to Favorites
      </button>
    </div>
  );
}
export default Product;
