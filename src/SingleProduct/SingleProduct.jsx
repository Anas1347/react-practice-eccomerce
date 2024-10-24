import React from "react";

const SingleProduct = ({ product, addSelectedProduct }) => {
  const {
    product_name,
    price,
    category,
    description,
    image,
    rating,
    posted_date,
  } = product;
  return (
    <div className="card bg-gray-400 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={product_name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_name}</h2>
        <p className="text-gray-500">{category}</p>
        <p>{description}</p>
        <p className="font-bold text-lg">Price: ${price}</p>
        <p>Rating: {rating} / 5</p>
        <p>Posted on: {posted_date}</p>
        <div className="card-actions">
          <button onClick={()=>addSelectedProduct(product)} className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
};

export default SingleProduct;
