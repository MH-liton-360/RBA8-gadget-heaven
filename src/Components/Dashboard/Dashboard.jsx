import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList } from '../../utility/addToDB';
import Product from '../Product/Product';

const Dashboard = () => {

    const [cartList, setCartList] = useState([]);

    const allProducts = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        console.log(storedCartList, storedCartListInt, allProducts);


        const readProductList = allProducts.filter(Product => storedCartListInt.includes(Product.product_id));

        setCartList(readProductList);

    }, [allProducts])

    return (
        <div className="pt-5">

            <div className="bg-blue-500 h-48 text-white text-center p-3">
                <h2 className="text-3xl font-bold">Product Details</h2>
                <p className="text-sm max-w-2xl mx-auto p-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <Tabs>
                    <TabList>
                        <Tab>Cart</Tab>
                        <Tab>WishList</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>My Cart-List: {cartList.length} </h2>

                        {
                            cartList.map(product => <Product key={Product.product_id} product={product}></Product>)
                        }

                    </TabPanel>
                    <TabPanel>
                        <h2>My Wish-List</h2>
                    </TabPanel>
                </Tabs>
            </div>

            <div>
                <h2 className="py-3 font-bold">Cart</h2>
            </div>

            <div>

                <p>body</p>
            </div>

        </div>
    );
};

export default Dashboard;