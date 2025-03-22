import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";



const categories = [
    "All Products",
    "Laptops",
    "Phones",
    "Accessories",
    "Smart Watches",
    "MacBook",
    "iPhone",
    "Others"
];

const Products = () => {

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Products");


    // data load 
    useEffect(() => {

        fetch('./Products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))

    }, []);


    const filterProducts = selectedCategory === "All Products"
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <div>
            <h2 className="text-4xl font-bold text-blue-500 text-center pb-10">Explore Cutting-Edge Gadgets</h2>

            <div className="flex gap-5 ">
                <Sidebar categories={categories} onSelectCategory={setSelectedCategory} />

                <div className="grid grid-cols-3 gap-5 ">
                    {filterProducts.length > 0 ? (
                        filterProducts.map(product => <Product
                            product={product}
                            key={product.product_id}
                        ></Product>)
                    ) : (
                        <p className="font-black text-4xl text-amber-600">No Data Found.</p>
                    )}
                </div>
            </div>




        </div>
    );
};

export default Products;