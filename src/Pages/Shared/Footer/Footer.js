import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='mt-[100px]'>
            <footer className="footer p-10 bg-[#9b1173] text-white">
                <div>
                    <h1 className='text-xl'>Company</h1>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <h1 className='text-xl'>Help and Support</h1>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <h1 className="text-xl">Legal</h1>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <h1 className="text-xl">Resources</h1>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
            <div className='bg-[#9b1173] text-white '>
                <div className='mx-7 py-9'>
                    <hr className='hidden md:hidden lg:block' />
                    <div className='flex justify-between items-center gap-2 md:gap-0 lg:gap-0'>
                        <p className='pt-5 font-thin'>Copyright @2023 All rights reserved | Developed by
                            <Link to='/' className='pl-2'>Curl Ware</Link>
                        </p>
                        <div className='flex items-center gap-4'>
                            <Link to='https://www.facebook.com/curlware' target='_blank'>
                                <FaFacebook className=' h-[25px] w-[25px] ' />
                            </Link>
                            <Link to='https://twitter.com/curlware' target='_blank'>
                                <FaTwitter className=' h-[25px] w-[25px] ' />
                            </Link>
                            <Link to='https://www.linkedin.com/company/curlware/' target='_blank'>
                                <FaLinkedin  className=' h-[25px] w-[25px] '/>
                            </Link>
                            <Link to='https://www.youtube.com/channel/UCZ3hxj_keJmD4xrDxbyveEA' target='_blank'>
                                <FaYoutube className=' h-[25px] w-[25px] ' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Footer;