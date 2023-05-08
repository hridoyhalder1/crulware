import React from 'react';
import mail from '../../../assets/NewsLetter/email.gif';

const NewsLetter = () => {
    return (
        <div className='mt-[100px]'>
            <div className='bg-[#9b1173] mx-16 rounded-xl'>
                <div className='text-center  py-10 '>

                    <div>
                        <h1 className='text-3xl mb-3 text-white'>Join Our Weekly NewsLetter</h1>
                        <p className='text-[14px] mb-3 text-white'>Get news in your inbox every week! We hate spam too, so no worries about this.</p>
                        <form action="">
                            <div className='flex flex-col w-[400px] mx-auto'>
                                <input type="email" placeholder='Enter Email' className='outline-none pl-5 rounded-full py-2' required/>
                                <button type="submit" className='border mt-3 rounded-full py-2 text-white flex items-center justify-center gap-2'> <img src={mail} alt="" className='w-[30px] rounded-full' /> Join</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;