import { Link } from "react-router-dom";


const Product = ({ product }) => {

    const { product_id, product_image, product_title, price } = product;

    return (
        <div className="card bg-base-100 shadow-2xl">
            <figure className="p-5">
                <img
                    src={product_image}
                    className="h-[180px]"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title} </h2>
                <h3>price: {price} </h3>
                <div className="card-actions justify-start">
                    <Link to={`/products/${product_id}`} >
                        <button className="btn btn-outline btn-accent rounded-xl">Details</button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;