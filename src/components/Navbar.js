import React, { useState } from "react";
import LogoImage from "../images/logo.svg";
import { CiSearch } from 'react-icons/ci';
import { BsBag } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import AddToCartModal from "./AddToCartModal";

const Navbar = () => {
    const [toggleCart, setToggleCart] = useState(false);

    const handleToggle = () => {
        setToggleCart(!toggleCart);
    }

    return (
        <>
            <div className="bg-[#20283f] w-100 p-5">
                <div className="flex justify-between items-center pb-5">
                    {/* Logo */}
                    <div>
                        <img src={LogoImage} alt='logo' />
                    </div>

                    {/* Search Bar (You can optimize the search bar code) */}
                    <div className="relative w-50 sm:hidden md:hidden">
                        <input type="text" placeholder="Search..." className="mt-1 pt-5 pl-5 pb-5 pr-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-[30px] sm:text-sm focus:ring-1" />
                        <button className="absolute top-[10px] mr-2 right-0 bg-[#0085ff] rounded-[50%] p-2"><CiSearch size="30px" color="white" /></button>
                    </div>

                    {/* Cart Icon */}
                    <div className="flex gap-3 items-center cursor-pointer" onClick={handleToggle}>
                        <span className="bg-[#0085ff] rounded-[50%] min-w-[25px] h-[25px] text-center text-white">0</span>
                        <span className="flex"><BsBag className="lg:text-3xl text-3xl" color="white" /></span>
                        <span className="flex text-white hidden lg:block sm:hidden md:hidden">Your Cart</span>
                    </div>
                </div>

                {/* Display AddToCartModal when toggleCart is true */}
                        <div className="absolute">
                            {toggleCart && <AddToCartModal closeModal={handleToggle} />}

                        </div>
                <div className="relative w-50 hidden sm:block md:block">
                    <input type="text" placeholder="Search..." className="mt-1 pt-5 pl-5 pb-5 pr-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-[30px] sm:text-sm focus:ring-1" />
                    <button className="absolute top-[10px] mr-2 right-0 bg-[#0085ff] rounded-[50%] p-2"><CiSearch size="30px" color="white" /></button>
                </div>
            </div>
        </>
    )
}

export default Navbar;
