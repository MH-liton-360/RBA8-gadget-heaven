import Bannerimg from '../../assets/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-blue-500 pb-24">
                <div className="hero-content text-center">
                    <div className="max-w-5xl text-white">
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="text-sm max-w-2xl mx-auto py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn bg-white rounded-xl text-blue-700">Shop Now</button>
                    </div>
                </div>
            </div>

            <div className='-translate-y-22 justify-items-center'>
                <img className='extra  rounded-3xl' src={Bannerimg} alt="" />
            </div>


        </div>
    );
};

export default Banner;