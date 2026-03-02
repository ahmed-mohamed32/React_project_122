import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";

export function ProductDetails(){
    const {id} = useParams();
    const [product , setProduct] =useState([]);
    const [quantity , setquantity] =useState(0);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    },[id]);
      if (!product) {
    return <h2>Loading...</h2>;
  }

  function handleAdd() {
      toast.success("Added Successfully");
    }

    return(
        <>
        <ToastContainer />
        <div>
            <img src={product.image} alt={product.description} />
        </div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>$ {product.price}</h2>

            <button onClick={() => setquantity(quantity + 1)}>+</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={()=> setquantity(quantity-1)}>-</button>

        <div>
            <button onClick={handleAdd}>Add To Cart</button>
        </div>
        </>
    )
}