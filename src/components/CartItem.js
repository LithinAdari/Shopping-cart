import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/Slices/cartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item,index}) => {

    const dispatch = useDispatch();

    const removeItemFromCart = () => {

        dispatch(remove(item.id));
        toast.error("Item Removed")

    }
  return (
        <div className={` md:w-[100%] flex flex-col  md:flex-row  gap-x-[3rem]  md:px-[1rem] p-2 md:py-[2rem] ${index ? ("") : ("border-black border-b-[2px]")}`}>

            <img src={item.image} alt='img' className=' object-contain w-[30%] md:w-[25%]  mx-auto'/>

            <div className=' md-w-[100%] flex flex-col gap-y-2 mt-5 md:mt-0 '>
                <div className='font-semibold text-2xl text-slate-700'>
                    {item.title}
                </div>

                <div className=' md-w-[100%] text-lg leading-6 pt-3 text-slate-500'>
                    {item.description.split(" ").slice(0,15).join(" ") + "..."}
                </div>

                <div className='flex justify-between items-center pt-3'>
                    <p className='text-green-600 font-bold text-lg'>${item.price}</p>

                    <button onClick={removeItemFromCart} className='bg-red-300 p-3 rounded-full'>
                        <MdDelete/>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default CartItem