import { UserButton } from '@clerk/nextjs';
import { Search } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <div className='p-5 shadow-sm border-b-2 flex justify-between items-center bg-white flex-wrap'>
            <div className='flex gap-2 items-center p-2 border rounded-md max-w-full sm:max-w-lg bg-white w-full sm:w-auto mb-2 sm:mb-0'>
                <Search />
                <input 
                    type='text' 
                    placeholder='Search...' 
                    className='outline-none flex-1' 
                />
            </div>
            <div className='flex gap-5 items-center flex-wrap justify-center sm:justify-end w-full sm:w-auto'>
                <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 text-center'>
                    🔥Join Membership just for $9.99/Month
                </h2>
                <UserButton/>
            </div>
        </div>
    );
}

export default Header;
