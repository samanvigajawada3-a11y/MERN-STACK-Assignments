function Product(props){ // (Structure -> {productObj : {}} props )-> properties that has been received from the parent component.
    //{productObj : {}}
    // State
    const {productObj} = props;
    // return a react element
return(
    <div className="p-10 shadow-2xl">
        <h2 className="text-2xl">{productObj.title}</h2>
        <p className="font-bold">{productObj.price}</p>
        <p className="font-bold">{productObj.description}</p>
    </div>
)
}
export default Product;