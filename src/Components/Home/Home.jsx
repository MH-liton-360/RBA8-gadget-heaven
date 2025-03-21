import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto pr-32">
                <Products></Products>

            </div>
        </div>
    );
};

export default Home;