import React from 'react';
import bundle from '../../../assets/bundleOffer/bundleoffer.jpg';
import { Link } from 'react-router-dom';
import './BundleProducts.css';
import { FaThLarge } from 'react-icons/fa';

const BundleProducts = () => {
    return (
        <div className=' md:mx-5 mx-5 lg:mx-16 mt-[100px]'>
            <div className='bg-[#ccdcff] py-14 rounded-md'>
                <h1 className='text-4xl text-center'>Spring into Savings: Get the <br /> Ultimate Bundle Offer Now!</h1>
                <p className='text-center pt-4 pb-4'>Get ready to bloom this season with  our Spring Bundle Offer <br /> - a perfect package to spruce up your springtime!</p>
                <div>
                    <div className='bundle '>
                        <img src={bundle} className='w-[450px] h-[350px] mx-auto rounded-2xl ' alt="popular1" />
                        <div>
                            <ul className='icons text-center'>
                                <li>
                                    <Link to='/' >
                                        <button className='flex items-center gap-2 bg-white px-3 py-2 rounded'><FaThLarge />View Bundle</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BundleProducts;