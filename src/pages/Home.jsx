import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  console.log(data);
  return (
    <div className="max-w-[1240px] mx-auto my-[100px]">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {data.map((item) => {
          return (
            <Link to={`/product-details/${item.id}`} key={item.id}>
              <div className="w-[300px] h-[300px] border-[1px] border-gray-300 flex flex-col justify-center items-center p-4 overflow-hidden">
                <img
                  src={item.image}
                  alt="product image"
                  className="h-[200px] w-[200px]"
                />
                <div>
                  <h3 className="font-semibold">{item?.title}</h3>
                  <h1 className="text-[24px] font-bold">${item?.price}</h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
