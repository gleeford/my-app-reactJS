function Product(props){
    return(
// image, name, description, price 
        <div>
            <img src={props.img} alt="product"/>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h4>{props.price}</h4>
        </div>
    );
}
export default Product;