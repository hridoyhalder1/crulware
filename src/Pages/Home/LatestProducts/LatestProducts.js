import React, { useState } from 'react';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import popular1 from '../../../assets/products/popular-1.avif';

const LatestProducts = () => {
    const [color, setColor] = useState('');
    const [isBookmarked, setIsBookmarked] = useState(false);

    const love = () => {
        setColor('red');
        setIsBookmarked(!isBookmarked);
    }
    return (
        <div className='mt-[100px]'>
            <h1 className='text-4xl text-center mb-14'>Latest Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mx-5 md:mx-5  lg:mx-16 p-10 md:p-0 lg:p-0'>

                {/* ========product1======== */}

                <div className="card w-96 bg-base-100 shadow-xl rounded-md cursor-pointer">
                    <div className='box'>
                        <img src={popular1} className='w-full h-full rounded-tl-md rounded-tr-md' alt="popular1" />
                        <ul className='icon' title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}>
                            <li className='bg-[white] p-3 rounded-full' >
                                <FaRegHeart className={`w-[25px] mask mask-heart bg-red-400 h-[25px] ${isBookmarked ? 'fill-current' : 'fill-none'} `} onClick={love} />
                            </li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <Link to='/'>
                            <h1 className="text-[14px] font-bold">Jaroti - Elementor Accessories WooCommerce Theme</h1>
                        </Link>
                        <p className='text-[12px] font-medium text-[gray]'>by olyogroup in WooCommerce</p>
                        <div className='pt-5 flex items-center justify-between'>
                            <div>
                                <h1 className='font-bold'>$19</h1>
                                <div className="rating flex items-center py-2">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5 " />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" checked />
                                    <p className='text-[14px] mt-1 pl-1'>(7)</p>
                                </div>
                                <p className='text-[14px]'>380 Sales</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='cart px-3 py-2 rounded cursor-pointer'>
                                    <FaShoppingCart className='w-[20px] h-[20px]' />
                                </div>
                                <Link to='/'>
                                    <button className='px-5 py-2  live-border rounded'>Live Preview</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===========product2=========== */}

                <div className="card w-96 bg-base-100 shadow-xl rounded-md cursor-pointer">
                    <div className='box'>
                        <img src={popular1} className='w-full h-full rounded-tl-md rounded-tr-md' alt="popular1" />
                        <ul className='icon' title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}>
                            <li className='bg-[white] p-3 rounded-full' >
                                <FaRegHeart className={`w-[25px] mask mask-heart bg-red-400 h-[25px] ${isBookmarked ? 'fill-current' : 'fill-none'} `} onClick={love} />
                            </li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <Link to='/'>
                            <h1 className="text-[14px] font-bold">Jaroti - Elementor Accessories WooCommerce Theme</h1>
                        </Link>
                        <p className='text-[12px] font-medium text-[gray]'>by olyogroup in WooCommerce</p>
                        <div className='pt-5 flex items-center justify-between'>
                            <div>
                                <h1 className='font-bold'>$19</h1>
                                <div className="rating flex items-center py-2">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5 " />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" checked />
                                    <p className='text-[14px] mt-1 pl-1'>(7)</p>
                                </div>
                                <p className='text-[14px]'>380 Sales</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='cart px-3 py-2 rounded cursor-pointer'>
                                    <FaShoppingCart className='w-[20px] h-[20px]' />
                                </div>
                                <Link to='/'>
                                    <button className='px-5 py-2  live-border rounded'>Live Preview</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==========product3========== */}

                <div className="card w-96 bg-base-100 shadow-xl rounded-md cursor-pointer">
                    <div className='box'>
                        <img src={popular1} className='w-full h-full rounded-tl-md rounded-tr-md' alt="popular1" />
                        <ul className='icon' title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}>
                            <li className='bg-[white] p-3 rounded-full' >
                                <FaRegHeart className={`w-[25px] mask mask-heart bg-red-400 h-[25px] ${isBookmarked ? 'fill-current' : 'fill-none'} `} onClick={love} />
                            </li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <Link to='/'>
                            <h1 className="text-[14px] font-bold">Jaroti - Elementor Accessories WooCommerce Theme</h1>
                        </Link>
                        <p className='text-[12px] font-medium text-[gray]'>by olyogroup in WooCommerce</p>
                        <div className='pt-5 flex items-center justify-between'>
                            <div>
                                <h1 className='font-bold'>$19</h1>
                                <div className="rating flex items-center py-2">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5 " />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" checked />
                                    <p className='text-[14px] mt-1 pl-1'>(7)</p>
                                </div>
                                <p className='text-[14px]'>380 Sales</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='cart px-3 py-2 rounded cursor-pointer'>
                                    <FaShoppingCart className='w-[20px] h-[20px]' />
                                </div>
                                <Link to='/'>
                                    <button className='px-5 py-2  live-border rounded'>Live Preview</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========product4=========== */}

                <div className="card w-96 bg-base-100 shadow-xl rounded-md cursor-pointer">
                    <div className='box'>
                        <img src={popular1} className='w-full h-full rounded-tl-md rounded-tr-md' alt="popular1" />
                        <ul className='icon' title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}>
                            <li className='bg-[white] p-3 rounded-full' >
                                <FaRegHeart className={`w-[25px] mask mask-heart bg-red-400 h-[25px] ${isBookmarked ? 'fill-current' : 'fill-none'} `} onClick={love} />
                            </li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <Link to='/'>
                            <h1 className="text-[14px] font-bold">Jaroti - Elementor Accessories WooCommerce Theme</h1>
                        </Link>
                        <p className='text-[12px] font-medium text-[gray]'>by olyogroup in WooCommerce</p>
                        <div className='pt-5 flex items-center justify-between'>
                            <div>
                                <h1 className='font-bold'>$19</h1>
                                <div className="rating flex items-center py-2">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5 " />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" checked />
                                    <p className='text-[14px] mt-1 pl-1'>(7)</p>
                                </div>
                                <p className='text-[14px]'>380 Sales</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='cart px-3 py-2 rounded cursor-pointer'>
                                    <FaShoppingCart className='w-[20px] h-[20px]' />
                                </div>
                                <Link to='/'>
                                    <button className='px-5 py-2  live-border rounded'>Live Preview</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========products5=========== */}

                <div className="card w-96 bg-base-100 shadow-xl rounded-md cursor-pointer">
                    <div className='box'>
                        <img src={popular1} className='w-full h-full rounded-tl-md rounded-tr-md' alt="popular1" />
                        <ul className='icon' title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}>
                            <li className='bg-[white] p-3 rounded-full' >
                                <FaRegHeart className={`w-[25px] mask mask-heart bg-red-400 h-[25px] ${isBookmarked ? 'fill-current' : 'fill-none'} `} onClick={love} />
                            </li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <Link to='/'>
                            <h1 className="text-[14px] font-bold">Jaroti - Elementor Accessories WooCommerce Theme</h1>
                        </Link>
                        <p className='text-[12px] font-medium text-[gray]'>by olyogroup in WooCommerce</p>
                        <div className='pt-5 flex items-center justify-between'>
                            <div>
                                <h1 className='font-bold'>$19</h1>
                                <div className="rating flex items-center py-2">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5 " />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" checked />
                                    <p className='text-[14px] mt-1 pl-1'>(7)</p>
                                </div>
                                <p className='text-[14px]'>380 Sales</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='cart px-3 py-2 rounded cursor-pointer'>
                                    <FaShoppingCart className='w-[20px] h-[20px]' />
                                </div>
                                <Link to='/'>
                                    <button className='px-5 py-2  live-border rounded'>Live Preview</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========products6=========== */}

                <div className="card w-96 bg-base-100 shadow-xl rounded-md cursor-pointer">
                    <div className='box'>
                        <img src={popular1} className='w-full h-full rounded-tl-md rounded-tr-md' alt="popular1" />
                        <ul className='icon' title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}>
                            <li className='bg-[white] p-3 rounded-full' >
                                <FaRegHeart className={`w-[25px] mask mask-heart bg-red-400 h-[25px] ${isBookmarked ? 'fill-current' : 'fill-none'} `} onClick={love} />
                            </li>
                        </ul>
                    </div>
                    <div className="p-2">
                        <Link to='/'>
                            <h1 className="text-[14px] font-bold">Jaroti - Elementor Accessories WooCommerce Theme</h1>
                        </Link>
                        <p className='text-[12px] font-medium text-[gray]'>by olyogroup in WooCommerce</p>
                        <div className='pt-5 flex items-center justify-between'>
                            <div>
                                <h1 className='font-bold'>$19</h1>
                                <div className="rating flex items-center py-2">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5 " />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400 w-5" checked />
                                    <p className='text-[14px] mt-1 pl-1'>(7)</p>
                                </div>
                                <p className='text-[14px]'>380 Sales</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='cart px-3 py-2 rounded cursor-pointer'>
                                    <FaShoppingCart className='w-[20px] h-[20px]' />
                                </div>
                                <Link to='/'>
                                    <button className='px-5 py-2  live-border rounded'>Live Preview</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 text-center'>
                <Link to='/'>
                    <button className='btn bg-[#9b1173] border-none outline-none hover:bg-[#9b1173] mt-3'>View All Latest Products</button>
                </Link>
            </div>
        </div>
    );
};

export default LatestProducts;