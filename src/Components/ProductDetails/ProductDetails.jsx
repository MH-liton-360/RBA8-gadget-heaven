import './ProductDetails.css'
import { Link, useLoaderData, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { addToStoredCartList } from '../../utility/addToDB';


const ProductDetails = () => {

    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id);

    const product = data.find(product => product.product_id === id);


    const { product_image, product_title, price, description, Specification } = product;



    const handleAddToCart = (id) => {

        addToStoredCartList(id);

    }

    const handleAddToWish = (id) => {
        addToStoredWishList(id);
    }

    return (

        <div className="pt-5">

            <div className="bg-blue-500 h-48 text-white text-center p-3">
                <h2 className="text-3xl font-bold">Product Details</h2>
                <p className="text-sm max-w-2xl mx-auto p-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="-translate-y-20">
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

                        <p className='font-semibold'>Specification:</p>
                        <ul className="list-disc list-inside">
                            {
                                Specification.map((spec, index) => (<li key={index}>{spec}</li>))
                            }
                        </ul>
                        <div>
                            <p className='font-bold'>Rating</p>
                            <div className="rating py-1">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />

                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <button onClick={() => handleAddToCart(product_id)} className="border-2 rounded-3xl text-left w-32 px-5 border-blue-600 bg-blue-400 hover:bg-amber-100">Add to cart </button>
                            <button onClick={() => handleAddToWish(product_id)} className="text-red-500" ><CiHeart size={24} /></button>


                        </div>
                        <div className="p-16">
                        </div>
                    </div>
                </div>

            </div>
        </div>






    );
};

export default ProductDetails;