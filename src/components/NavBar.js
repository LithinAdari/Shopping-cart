import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const NavBar = () => {

    const cart = useSelector((state) => state);


  return (
    <div className='w-screen bg-slate-900'>
        <div className='flex justify-between max-w-6xl mx-auto p-4'>

            <div>
                <NavLink to="/">
                    <img src='https://codehelp-shopping-cart.netlify.app/logo.png' alt='' height={180} width={180}/>
                </NavLink>
            </div>

            <div  className='flex text-white  items-center gap-x-5   '>
                <NavLink to="/">
                    <p className='text-lg hover:text-green-400 transition-all duration-200 ease-in' >Home</p>
                </NavLink>

                <NavLink to="/cart" className="flex hover:text-green-400 transition-all duration-200 ease-in ">
                    <FaCartShopping className='w-[25px]  h-[25px]  ' />
                    <div className='relative '>
                        {
                            cart.cart.length > 0 ?
                            (<div className='absolute bg-green-500 w-5 h-5 rounded-full flex items-center justify-center -top-1 -left-3
                            transition-all duration-200 animate-bounce'>{cart.cart.length}</div>)
                            :
                            (<div></div>)
                        }
                    </div>
                </NavLink>

            </div>
        </div>
    </div>

  )
}

export default NavBar