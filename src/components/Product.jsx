import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
    const [products, setProducts] = useState([]);

    // Fetch data from API
    const fetchProducts = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products");
            setProducts(res.data);
            console.log("Data fetched:", res.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        // <div className="flex flex-wrap justify-center gap-6 p-6">
        //   {products.map((product, index) => (
        //     <div
        //       key={index}
        //       className="w-64 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        //     >
        //       <img
        //         src={product.image}
        //         alt={product.title}
        //         className="w-full h-48 object-contain p-4"
        //       />
        //       <div className="px-4 py-2">
        //         <h3 className="text-lg font-semibold mb-1 truncate">{product.title}</h3>
        //         <p className="text-sm text-gray-600 mb-1 capitalize">{product.category}</p>
        //         <p className="text-blue-600 font-bold text-md">${product.price}</p>
        //       </div>
        //     </div>
        //   ))}
        // </div>

        <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((val, item) => (
          <ProductCard
            key={item}
            title={val.title}
            image={val.image}
            price={val.price}
            category={val.category}
          />
        ))}
      </div>
      
    );
};

export default Product;
