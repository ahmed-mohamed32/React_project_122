import { useEffect, useState } from "react";
import "./home.css";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Banner } from "./banner";

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function handleAdd() {
    toast.success("Added Successfully");
  }

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Banner />
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="card" >
            <Link to={`/product/${p.id}`} style={{ color : "black" , textDecoration : "none"}}>
              <img className="images" src={p.image} alt={p.description} />
              <h2>{p.title}</h2>
              <p className="price">${p.price}</p>
            </Link>

            <button onClick={handleAdd} className="add-btn">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
