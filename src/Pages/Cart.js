import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

    const {cart} = useSelector((state) => state);

    const [totalAmount , setTotalAmount] = useState(0);

    useEffect (() => {
        setTotalAmount (cart.reduce( (acc ,curr) => acc + curr.price , 0) );
    },[cart])



  return (

       <div className='max-w-[1200px] md:py-[2rem] flex flex-col mx-auto justify-center items-center mt-5 md:mt-10 p-2'>

        {
            cart.length > 0 ?
            (
            <div className='w-[100%] flex flex-col  md:flex-row gap-[4rem]' >
                <div className='w-[100%] md:w-[150%] flex flex-col gap-y-[2rem]'>
                    {
                        cart.map((item,index) => {
                            return <CartItem key={item.id} index={index===cart.length-1} item={item} itemIndex={index}  />
                        })
                    }
                </div>

                <div className='w-[100%] flex flex-col justify-between py-20 p-2'>

                    <div>
                        <p className='uppercase text-green-700 font-bold text-2xl'>
                            Your Cart
                        </p>

                        <p className='text-green-700 text-5xl uppercase font-bold '>summary</p>

                        <p className='pt-5'>
                            <span className='font-bold text-xl text-slate-600'>Total Items</span> : {cart.length}
                        </p>

                    </div>

                    <div>
                        <div className='pb-5 font-bold text-xl mt-5 md:mt-0 '>
                            <span className='font-bold text-xl text-slate-600'>Total Amount</span> : ${totalAmount}
                        </div>

                        <div>
                            <button className='w-full bg-green-600 px-10 py-4 rounded-lg text-white font-bold text-xl
                            hover:bg-white hover:text-green-600 hover:border-2 border-green-500 transition-all duration-300 ease-in  '>
                                CheckOut Now
                            </button>
                        </div>
                    </div>




                </div>
            </div>
            ) :
            (<div className='h-[400px] flex flex-col justify-center items-center gap-y-3'>
                <p className='font-semibold text-2xl mb-5'>Your Cart is Empty !</p>
                <NavLink to={'/'}>
                    <button className=' bg-green-600 px-10 py-3 rounded-lg text-white font-bold text-xl
                    hover:bg-white hover:text-green-600 hover:border-2 border-green-500 transition-all duration-300 ease-in'>
                        Shop Now
                    </button>
                </NavLink>
            </div>)
        }

       </div>
  )
}

export default Cart