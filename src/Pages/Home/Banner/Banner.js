import React, { useEffect, useMemo, useState } from 'react';
import banner from '../../../assets/BannerImg/banner.webp';
import { HiSearch } from "react-icons/hi";
import './Banner.css';
import { Link } from 'react-router-dom';
import figma from '../../../assets/icons/figma.jpg';
import bootstrap from '../../../assets/icons/bootstrap.jpg';
import node from '../../../assets/icons/nodejs.jpg';
import react from '../../../assets/icons/react.jpg';
import laravel from '../../../assets/icons/laravel.jpg';
import vue from '../../../assets/icons/vuejs.jpg';
import angular from '../../../assets/icons/angular.jpg';
import tailwind from '../../../assets/icons/tailwind.png';
import material from '../../../assets/icons/material.png';
import nextjs from '../../../assets/icons/nextjs.png';

const Banner = () => {
    const [text, setText] = useState("");
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

    const placeholderSpeed = 200; // Set the speed of the typewriter effect in milliseconds
    const placeholderInterval = 5000; // Set the interval between placeholder switches in milliseconds

    const placeholderTexts = useMemo(
        () => [
            "Search here ...",
            "UI Material Kit...",
            "WordPress Theme & plugin...",
            "Bootstrap dashboard & template...",
            "Rect template...",
        ],
        []
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prevIndex) =>
                prevIndex === placeholderTexts[currentPlaceholder].length - 1
                    ? 0
                    : prevIndex + 1
            );
        }, placeholderSpeed);
        return () => clearInterval(interval);
    }, [currentPlaceholder, placeholderTexts, placeholderSpeed]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPlaceholder((prevIndex) =>
                prevIndex === placeholderTexts.length - 1 ? 0 : prevIndex + 1
            );
            setPlaceholderIndex(0);
            setText("");
        }, placeholderInterval);
        return () => clearInterval(interval);
    }, [placeholderTexts, placeholderInterval]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted text:", text);
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-0 md:gap-0 lg:gap-[200px]">
                    {/* <img src={banner} alt='' /> */}

                    <div className='hidden md:block lg:block'>
                        <div className='circle-wrapper'>
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>

                            <div className='icons'>
                                <span>
                                    <a href='/'  title='data-tip' className='circle-1 tooltip ' data-tip={figma} >
                                        <img src={figma}   alt="" className='icon '  />
                                    </a>
                                    <a href='/' className='circle-1'>
                                        <img src={bootstrap} alt="" className='icon'/>
                                    </a>
                                </span>

                                <span>
                                    <a href='/' className='circle-2'>
                                        <img src={react}  alt="" className='icon'/>
                                    </a>
                                    <a href='/' className='circle-2'>
                                        <img src={laravel} alt="" className='icon'/>
                                    </a>
                                    <a href='/' className='circle-2'>
                                        <img src={node} alt="" className='icon'/>
                                    </a>
                                </span>

                                <span>
                                    <a href='/' className='circle-3'>
                                        <img src={vue} alt="" className='icon'/>
                                    </a>
                                    <a href='/' className='circle-3'>
                                        <img src={angular} alt=""className='icon' />
                                    </a>
                                    <a href='/' className='circle-3'>
                                        <img src={tailwind} alt=""className='icon' />
                                    </a>
                                    <a href='/' className='circle-3'>
                                        <img src={nextjs} alt=""className='icon' />
                                    </a>
                                    <a href='/' className='circle-3'>
                                        <img src={material} alt=""className='icon' />
                                    </a>
                                    
                                </span>

                            </div>
                        </div>
                    </div>




                    <div className='w-[50%] '>
                        <h1 className="text-4xl font-bold text-white">Professional Themes & Website Templates for any project</h1>
                        <h3 className="py-6 text-white">Discover thousands of easy-to-customize themes, templates, UI Kits, and dashboards built on top of Bootstrap, Vue.js, React, Angular, and Node.js, made by world-class developers.</h3>
                        <div className='bg-white   my-0 rounded-full'>

                            <div className='ml-3 '>
                                <form action="" onSubmit={handleSubmit} className='flex justify-between w-full'>
                                    <input
                                        type="text"
                                        name='searchbox'
                                        id='searchbox'
                                        onChange={handleInputChange}
                                        placeholder={placeholderTexts[currentPlaceholder].slice(
                                            0,
                                            placeholderIndex + 1
                                        )}
                                        className='mr-3 border-none outline-none   rounded-full w-full' required
                                    />

                                    {/* button */}

                                    <button type="submit" className=' ' >
                                        <div className='flex items-center bg-[#e51466] text-white px-3 py-3  rounded-full'>
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