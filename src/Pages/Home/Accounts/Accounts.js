import React from 'react';
import { FaCloudDownloadAlt, FaCode, FaUserFriends } from "react-icons/fa";

const Accounts = () => {
    return (
        <div className='mt-[100px] bg-[#9b1173] text-white py-10'>
            <div>
                <h1 className='text-center text-4xl mb-8'>Create captivating web experiences <br/> that immerse your audience.
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center '>
                    <div className=''>
                        <div className='text-center  m-auto rounded-full'>
                            <FaUserFriends className='w-[60px] h-[60px] m-auto my-2 ' />
                        </div>
                        <h1 className='text-center text-3xl'>2,201,193</h1>
                        <h1 className='text-center text-3xl'>Accounts</h1>
                    </div>
                    <div>
                        <div className='text-center  m-auto rounded-full'>
                            <FaCloudDownloadAlt className='w-[60px] h-[60px] m-auto my-2 ' />
                        </div>
                        <h1 className='text-center text-3xl'>4,990,362</h1>
                        <h1 className='text-center text-3xl'>Downloads</h1>
                    </div>
                    <div>
                        <div className='text-center  m-auto rounded-full'>
                            <FaCode className='w-[60px] h-[60px] m-auto my-2 ' />
                        </div>
                        <h1 className='text-center text-3xl'>200+</h1>
                        <h1 className='text-center text-3xl'>Products</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accounts;