import React from 'react';
import { Link } from 'react-router-dom';
import html from '../../../assets/icons/html.svg';
import wordpress from '../../../assets/icons/wordpress.svg';
import react from '../../../assets/icons/reactsvg.png';
import bootstrap from '../../../assets/icons/bootstrapsvg.png';
import angular from '../../../assets/icons/angular.jpg';
import tailwind from '../../../assets/icons/tailwind.png';
import laravel from '../../../assets/icons/laravelsvg.png';
import node from '../../../assets/icons/nodejs.jpg';


const Nav = () => {
    return (
        <div className='bg-[#ccdcff]'>
            <div className='mt-[100px] mx-5 '>
                <div className=' p-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8  gap-2'>
                    <div className='rounded-xl bg-[white] py-8 px-3 hover:-translate-y-2 transition-all shadow'>
                        <Link to='/'>
                            <div className=' '>
                                <img src={html} alt="" className='rounded-lg mx-auto' />
                                <p className='text-center mt-2'>HTML 5</p>
                            </div>
                        </Link>
                    </div>
                    <div className='rounded-xl bg-[white] py-8 px-3 hover:translate-y-2 transition-all shadow'>
                        <Link to='/'>
                            <div className=' '>
                                <img src={wordpress} alt="" className='rounded-lg mx-auto' />
                                <p className='text-center mt-2'>WordPress</p>
                            </div>
                        </Link>
                    </div>
                    <div className='rounded-xl bg-[white] py-8 px-3 hover:-translate-y-2 transition-all shadow'>
                        <Link to='/'>
                            <div className=' '>
                                <img src={bootstrap} alt="" className='rounded-lg mx-auto w-[40%] ' />
                                <p className='text-center mt-2'>Bootstrap</p>
                            </div>
                        </Link>
                    </div>
                    <div className='rounded-xl bg-[white] py-8 px-3 hover:translate-y-2 transition-all shadow'>
                        <Link to='/'>
                            <div className=' '>
                                <img src={angular} alt="" className='rounded-lg mx-auto w-[40%]' />
                                <p className='text-center mt-2'>Angular</p>
                            </div>
                        </Link>
                    </div>
                    <div className='rounded-xl bg-[white] py-8 px-3 hover:-translate-y-2 transition-all shadow'>
                        <Link to='/'>
                            <div className=' '>
                                <img src={react} alt="" className='rounded-lg mx-auto w-[40%]' />
                                <p className='text-center mt-2'>React JS</p>
                            </div>
                        </Link>
                    </div>
                    <div className='rounded-xl bg-[white] py-8 px-3 hover:translate-y-2  transition-all shadow'>
                        <Link to='/'>
                            <div className=' '>
                                <img src={tailwind} alt="" className='rounded-lg mx-auto w-[40%]' />
                                <p className='text-center mt-2'>Tailwind CSS</p>
                            </div>
                        </Link>
                    </div>
                    <div className='rounded-xl bg-[white] py-8 px-3 hover:-translate-y-2 transition-all shadow'>
                        <Link to='/'>
                            <div className=' '>
                                <img src={laravel} alt="" className='rounded-lg mx-auto w-[40%]' />
                                <p className='text-center mt-2'>Laravel</p>
                            </div>
                        </Link>
                    </div>
                    <div className='rounded-xl bg-[white] py-8 px-3 hover:translate-y-2 transition-all shadow'>
                        <Link to='/'>
                            <div className=' '>
                                <img src={node} alt="" className='rounded-lg mx-auto w-[40%]' />
                                <p className='text-center mt-2'>Node JS</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;