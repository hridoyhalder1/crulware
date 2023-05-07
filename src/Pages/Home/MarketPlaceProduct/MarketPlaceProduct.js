import React from 'react';
import wordpress from '../../../assets/icons/wordpress.svg';
import react from '../../../assets/icons/react.jpg';
import bootstrap from '../../../assets/icons/bootstrapsvg.png';
import laravel from '../../../assets/icons/laravelsvg.png';
import vue from '../../../assets/icons/vuejs.jpg';
import { Link } from 'react-router-dom';

const MarketPlaceProduct = () => {
    return (
        <div className='mt-[100px] bg-[#ccdcff]'>
            <div className='py-11  md:mx-5 mx-5 lg:mx-16'>
                <h1 className='text-4xl text-center mb-5'>Marketplace Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div>
                        <div className='flex items-center'>
                            <img src={wordpress} alt="wordpress" className='rounded-md w-10 mr-3' />
                            <h1 className='text-xl font-bold hover:text-[#9b1173] cursor-pointer'>WordPress Themes</h1>

                        </div>
                        <div className='ml-14 mt-4'>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Restaurant WordPress Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Travelling Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Real Estate WordPress Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Business WordPress Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Cars Themes</p>
                            </Link>
                        </div>
                    </div>

                    {/* ======react==== */}

                    <div>
                        <div className='flex items-center'>
                            <img src={react} alt="wordpress" className='rounded-md w-10 mr-3' />
                            <h1 className='text-xl font-bold hover:text-[#9b1173] cursor-pointer'>React Templates</h1>

                        </div>
                        <div className='ml-14 mt-4'>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vision UI Dashboard PRO React</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vision UI Dashboard PRO React</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vision UI Dashboard PRO React</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vision UI Dashboard PRO React</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vision UI Dashboard PRO React</p>
                            </Link>
                        </div>
                    </div>

                    {/* ========Bootstrap====== */}

                    <div>
                        <div className='flex items-center'>
                            <img src={bootstrap} alt="wordpress" className='rounded-md w-10 mr-3' />
                            <h1 className='text-xl font-bold hover:text-[#9b1173] cursor-pointer'>Bootstrap Themes</h1>

                        </div>
                        <div className='ml-14 mt-4'>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Light Bootstrap Dashboard Pro</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Paper Dashboard PRO</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Restaurant WordPress Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Restaurant WordPress Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Restaurant WordPress Themes</p>
                            </Link>
                        </div>
                    </div>

                    {/* =======Laravel========= */}

                    <div>
                        <div className='flex items-center'>
                            <img src={laravel} alt="wordpress" className='rounded-md w-10 mr-3' />
                            <h1 className='text-xl font-bold hover:text-[#9b1173] cursor-pointer'>Laravel Themes</h1>

                        </div>
                        <div className='ml-14 mt-4'>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Argon Dashboard 2 Pro Laravel</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Argon Dashboard 2 Pro Laravel</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Argon Dashboard 2 Pro Laravel</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Argon Dashboard 2 Pro Laravel</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Argon Dashboard 2 Pro Laravel</p>
                            </Link>
                        </div>
                    </div>
                    {/* =======vue js========= */}

                    <div>
                        <div className='flex items-center'>
                            <img src={vue} alt="wordpress" className='rounded-md w-10 mr-3' />
                            <h1 className='text-xl font-bold hover:text-[#9b1173] cursor-pointer'>Vue JS Themes</h1>

                        </div>
                        <div className='ml-14 mt-4'>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vue Material Dashboard PRO</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vue Paper Dashboard PRO</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vuetify Material Dashboard 2 PRO</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vue Black Dashboard Pro</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Vue Now UI Dashboard PRO</p>
                            </Link>
                        </div>
                    </div>
                    {/* =======Laravel========= */}

                    <div>
                        <div className='flex items-center'>
                            <img src={wordpress} alt="wordpress" className='rounded-md w-10 mr-3' />
                            <h1 className='text-xl font-bold hover:text-[#9b1173] cursor-pointer'>WordPress Themes</h1>

                        </div>
                        <div className='ml-14 mt-4'>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Restaurant WordPress Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Restaurant WordPress Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Restaurant WordPress Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Restaurant WordPress Themes</p>
                            </Link>
                            <Link to='/'>
                                <p className='pb-2 hover:text-[#9b1173]'>Restaurant WordPress Themes</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MarketPlaceProduct;