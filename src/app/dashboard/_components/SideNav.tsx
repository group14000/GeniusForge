"use client";

import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect } from 'react';
import UsageTrack from './UsageTrack';

const SideNav = () => {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        // {
        //     name: 'Billing',
        //     icon: WalletCards,
        //     path: '/dashboard/billing'
        // },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/setting'
        },
    ];

    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen p-5 shadow-sm border bg-white relative'>
            <div className='flex justify-center'>
                <Image src="/logo.svg" alt='logo' width={120} height={100} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-10'>
                {MenuList.map((menu, index) => (
                    <Link href={menu.path} key={index}>
                        <div className={`flex gap-2 mb-2 p-3 items-center hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path === menu.path && 'bg-primary text-white'}`}>
                            <menu.icon className='h-6 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
            {/* <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack/>
            </div> */}
        </div>
    );
};

export default SideNav;
