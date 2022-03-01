import React, { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "./useFetch.js";
import Loader from "./Loader.js";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch(
    "https://react-tutorial-demo.firebaseio.com/"
  );

  useEffect(() => {
    get("supermarket.json")
      .then((data) => {
        setProducts([{
          "description":"200g cheese block",
          "id":1,
          "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
          "name":"Cheese",
          "price":10,
          "price_id":"price_1KX02HG8E5YxacPx0p8OsqlQ"
        },
        {
          "description":"200ml milk bottle",
          "id":2,
          "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/milk.png",
          "name":"Milk",
          "price":5,
          "price_id":"price_1KYTAWG8E5YxacPxkyHepPDc"
        },
        {
          "description":"1 piece of tomato",
          "id":3,
          "image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png",
          "name":"Tomato","price":2.75,"price_id":"price_1KYTB5G8E5YxacPxXxS1Wq78"
        },
        {
          "description":"500g pineapple",
          "id":4,"image":"https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png",
          "name":"Pineapple",
          "price":3.25,
          "price_id":"price_1KYTBVG8E5YxacPxMy4BGxGz"
        }
      ]);
      })
      .catch((error) => console.log("Could not load products", error));
  }, []);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              details={product}
              cart={props.cart}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
