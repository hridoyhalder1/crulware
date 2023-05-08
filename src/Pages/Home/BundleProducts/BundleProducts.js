import React from 'react';
import bundle from '../../../assets/bundleOffer/bundleoffer.jpg';
import { Link } from 'react-router-dom';
import './BundleProducts.css';
import { FaThLarge } from 'react-icons/fa';

const BundleProducts = () => {
    return (
        <div className=' mx-5 md:mx-5  lg:mx-16 mt-[100px]'>
            <div className='bg-[#ccdcff] py-14 rounded-md flex items-center flex-col'>
                <div>
                    <h1 className='text-4xl text-center mx-6 md:mx-0 lg:mx-0'>Spring into Savings: Get the <br /> Ultimate Bundle Offer Now!</h1>
                    <p className='text-center pt-4 pb-4 mx-6 md:mx-0 lg:mx-0'>Get ready to bloom this season with  our Spring Bundle Offer <br /> - a perfect package to spruce up your springtime!</p>
                </div>
                <div className='mx-6 md:mx-0 lg:mx-0'>
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