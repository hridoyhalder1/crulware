import React from 'react';
import banner from '../../../assets/BannerImg/banner.webp';
import { HiSearch } from "react-icons/hi";

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} alt='' />
                    <div>
                        <h1 className="text-4xl font-bold text-white">Professional Themes & Website Templates for any project</h1>
                        <h3 className="py-6 text-white">Discover thousands of easy-to-customize themes, templates, UI Kits, and dashboards built on top of Bootstrap, Vue.js, React, Angular, and Node.js, made by world-class developers.</h3>
                        <div className='bg-white   my-0 rounded-full'>

                            <div className='ml-3 '>
                                <form action="" className='flex justify-between w-full'>
                                    <input type="text" placeholder='eg.material' className='mr-3 border-none outline-none lg:w-auto  rounded-full w-full' required />
                                    <button type="submit" className=' ' >
                                        <div className='flex items-center bg-[#bde6ff] px-3 py-3  rounded-full'>
                                            <HiSearch />
                                            Search
                                        </div>
                                    </button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;