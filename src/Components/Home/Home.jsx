import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
                <Products></Products>

            </div>
        </div>
    );
};

export default Home;