import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) =>{
        const [products, setProduct] = useState([]);
    
        useEffect(async()=>{
    const response = await axios(API);
    setProduct(response.data);
        },[]);
        return products;
};

export default useGetProducts;
