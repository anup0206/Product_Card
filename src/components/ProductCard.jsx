import React from "react";

const ProductCard = ({ title, image, price, category }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-contain p-4" />
      <div className="px-4 py-2">
        <h3 className="text-lg font-semibold mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-600 mb-1 capitalize">{category}</p>
        <p className="text-blue-600 font-bold text-md">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
