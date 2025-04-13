import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";

const Home = () => {
  const [data, setData] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const addToCart = (item) => {
    setCart([...cart, {...item, count: 1}]);
  };

  console.log("cart", cart)

  return (
    <div className="max-w-[1240px] mx-auto my-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {data.map((item) => {
          return (
            // <Link to={`/product-details/${item.id}`} key={item.id}>
            <div  key={item.id} className="w-[300px] h-[370px] border-[1px] border-gray-300 flex flex-col justify-center items-center p-4 overflow-hidden">
              <img
                src={item.image}
                alt="product image"
                className="h-[200px] w-[200px]"
              />
              <div>
                <h3 className="font-semibold">{item?.title}</h3>
                <h1 className="text-[24px] font-bold">${item?.price}</h1>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-blue-600 text-white p-2"
                >
                  Add to cart
                </button>
              </div>
            </div>
            // </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
