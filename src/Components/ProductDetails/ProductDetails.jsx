import './ProductDetails.css'
import { Link, useLoaderData, useParams } from "react-router-dom";



const ProductDetails = () => {

    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);

    const product = data.find(product => product.product_id === id);


    const { product_image, product_title, price, description, Specification } = product;

    return (

        <div className="pt-5">

            <div className="bg-blue-500 h-48 text-white text-center p-3">
                <h2 className="text-3xl font-bold">Product Details</h2>
                <p className="text-sm p-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="-translate-y-22">
                <div className="Extra max-w-3xl mx-auto card lg:card-side bg-base-100 shadow-2xl rounded-3xl">
                    <figure className="h-80 p-5">
                        <img
                            src={product_image}
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product_title} </h2>
                        <h3 className="font-semibold">price: ${price} </h3>

                        <button className="border-2 rounded-3xl text-left w-24 px-5 border-amber-600 bg-amber-100">In Stock</button>
                        <p>{description} </p>

                        <p>Specification:</p>
                        <ul className="list-disc list-inside">
                            {
                                Specification.map((spec, index) => (<li key={index}>{spec}</li>))
                            }
                        </ul>
                        <div className="p-16">
                            <button className="border-2 rounded-3xl text-left w-32 px-5 border-amber-600 bg-amber-100 hover:bg-blue-500">Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>






    );
};

export default ProductDetails;