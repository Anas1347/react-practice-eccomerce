import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = ({addSelectedProduct}) => {
const [products, setProducts] = useState([])
useEffect(()=>{
    fetch("./data.json")
    .then(res =>res.json())
    .then(data => setProducts(data))
},[])



    return (
        <div>
            <h2>All Products :{products.length}</h2>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           {
                products.map(product => <SingleProduct addSelectedProduct={addSelectedProduct} key={product.id} product={product}></SingleProduct>)
            }
           </div>
        </div>
    );
}

export default AllProducts;
