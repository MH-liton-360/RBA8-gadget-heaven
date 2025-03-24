import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList } from '../../utility/addToDB';
import Product from '../Product/Product';
import { Helmet } from 'react-helmet';

const Dashboard = () => {

    const [cartList, setCartList] = useState([]);

    const allProducts = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        console.log(storedCartList, storedCartListInt, allProducts);


        const readProductList = allProducts.filter(product => storedCartListInt.includes(product.product_id));

        setCartList(readProductList);

    }, [allProducts])

    return (
        <div className="pt-5">

            <Helmet>
                <title>GadgetHeaven | Dashboard</title>
            </Helmet>


            <div className="bg-blue-500 h-44 text-white text-center p-3">
                <h2 className="text-3xl font-bold">Product Details</h2>
                <p className="text-sm max-w-2xl mx-auto p-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <Tabs>
                    <TabList>
                        <Tab>Cart</Tab>
                        <Tab>WishList</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>My Cart-List: {cartList.length} </h2>

                        <div className="pt-5 gap-4 min-h-96">
                            {
                                cartList.map(product => (
                                    <div className='border-4 border-amber-300' key={product.product_id}>
                                        <img src={product.product_image} alt={product.title} className="h-16" />
                                        <h3 className="text-lg font-bold mt-2">{product.product_title}</h3>
                                        <p className="text-gray-600">⭐ {product.rating} / 5</p>
                                        <p className="text-blue-500 font-bold">${product.price}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>My Wish-List</h2>
                    </TabPanel>
                </Tabs>
            </div>

            <div>
                <h2 className="py-3 font-bold h-96"></h2>
            </div>



        </div>
    );
};

export default Dashboard;