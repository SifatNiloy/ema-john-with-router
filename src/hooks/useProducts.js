import { useEffect, useState } from "react"

const useProducts=()=>{
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then (res=> res.formData())
        .then(data=> setProducts(data));
    },[]); 
    return [products];
}
export default useProducts;