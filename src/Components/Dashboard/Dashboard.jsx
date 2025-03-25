import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredCartList } from '../../utility/addToDB';
import Product from '../Product/Product';
import { Helmet } from 'react-helmet';

const Dashboard = () => {

    const [cartList, setCartList] = useState([]);
    const [sort, setSort] = useState('');

    const allProducts = useLoaderData();

    useEffect(() => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        console.log(storedCartList, storedCartListInt, allProducts);


        const readProductList = allProducts.filter(product => storedCartListInt.includes(product.product_id));

        setCartList(readProductList);

    }, [allProducts]);

    const handleSort = sortType => {
        setSort(sortType);

        if (sortType === 'Ratings') {
            const storedCartList = [...cartList].sort((a, b) => b.rating - a.rating);
            setCartList(storedCartList);

        }
        if (sortType === 'Price') {
            const storedCartList = [...cartList].sort((a, b) => b.price - a.price);
            setCartList(storedCartList);

        }
    }


    return (
        <div className="pt-5">

            <Helmet>
                <title>GadgetHeaven | Dashboard</title>
            </Helmet>


            <div className="bg-blue-500 h-44 text-white text-center p-3">
                <h2 className="text-3xl font-bold">Product Details</h2>
                <p className="text-sm max-w-2xl mx-auto p-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

            </div>


            <div className="dropdown dropdown-bottom pt-7 justify-items-end">
                <div tabIndex={0} role="button" className="btn m-1">
                    {
                        sort ? `Sort by: ${sort}` : 'Sort By ⬇️'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('Price')}><a>Price</a></li>
                </ul>
                <button className="btn btn-sm btn-outline btn-primary rounded-xl">Purchase</button>

            </div>

            <div className='pt-20'>
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
                                    <div className='flex gap-5 py-2 border-b border-amber-100' key={product.product_id}>

                                        <img src={product.product_image} alt={product.title} className="h-16" />
                                        <div>
                                            <h3 className="text-lg font-semibold mt-2">{product.product_title}</h3>
                                            <p className="text-gray-600">⭐ {product.rating} / 5</p>
                                            <p className="text-blue-500 font-bold">${product.price}</p>
                                        </div>

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





        </div>
    );
};

export default Dashboard;