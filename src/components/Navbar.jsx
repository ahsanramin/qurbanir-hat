'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';

const Navbar = () => {
    const links = <>
        <li className='text-lg'><NavLink href={'/'}>Home</NavLink></li>
        <li className='text-lg'><NavLink href={'/all-animals'}>All Animals</NavLink></li>
        <li className='text-lg'><NavLink href={'/profile'}>My Profile</NavLink></li>
    </>
    const loginRegister = <>
        <li className='text-lg block'><Link href={'/login'} >Login</Link></li>
        <li className='text-lg block'><Link href={'/register'} >Register</Link></li>
    </>
  
    const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user)
    const handleLogOut = async () => {
        await authClient.signOut();
    }
    return (
        <div className='shadow-sm'>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                            {user && <li className='text-lg block' onClick={handleLogOut}><Link href={'/login'} >Logout</Link></li>}
                             {!user && loginRegister}
                        </ul>
                    </div>
                    <div className='flex justify-between gap-2 items-center '>
                       
                        <h1 className='font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-red-800 to-green-800 bg-clip-text text-transparent'><Link href={'/'}>Qurbanir-Hat</Link></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                { !user && <div className="navbar-end hidden md:flex gap-4 ">
                    <button className='btn btn-primary btn-outline'><Link href={'/login'}>Login</Link></button>
                    <button className='btn btn-primary btn-outline'><Link href={'/register'}>Register</Link></button>
                </div> }
                    { user && <div className="navbar-end flex items-center gap-4 ">
                        <Avatar className='w-12 h-12 '>
                    <Avatar.Image alt={user?.name} src={user?.image} referrerPolicy='no-referrer' className='w-full object-cover' />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                        <button onClick={handleLogOut} className='btn btn-primary btn-outline hidden md:flex'><Link href={'/login'}>LogOut</Link></button>
                    </div>}
            </div>
        </div>
    );
};

export default Navbar;