import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams()
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(result => setData(result))
    },[id])

    console.log("product details", data)
    return (
        <div>
           {data?.image && <img src={data?.image} alt="" className='h-[200px] w-[200px]' />}
        </div>
    );
};

export default ProductDetails;