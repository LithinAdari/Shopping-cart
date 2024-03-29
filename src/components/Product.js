import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { remove,add } from '../Redux/Slices/cartSlice';

const Product = ({post}) => {

    const {cart} = useSelector( (state) => state);
    const dispatch = useDispatch();

    const addTocart =  () => {
        dispatch(add(post));
        toast.success("Item added to cart")
    }

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item Removed")
    }


  return (
    <div className='min-h-[80px] border-2 flex flex-col  justify-between items-center border-slate-100 rounded-[1rem] shadow-lg p-8
    group hover:scale-105 transition-all duration-300 ease-in hover:cursor-pointer hover:shadow-xl hover:shadow-gray-500'>
        <div className='flex flex-col gap-[1rem]'>
            <p className='font-bold text-lg'>{post.title.split(" ").slice(0,3).join(" ") + "..."}</p>
            <p className=' text-sm text-slate-400'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>

        <img src={post.image} alt='images' className='mx-auto h-[50%] object-contain' />

        <div className='w-full'>
            <div className='flex justify-between gap-[1rem] items-center'>
                <p className='text-green-500'>${post.price}</p>

                <button>
                    {
                        cart.some( (p) => p.id === post.id) ?
                        (<button
                        className='group-hover:scale-105 transition-all duration-300 ease-in group-hover:bg-gray-700 font-bold group-hover:text-white  uppercase border-2 border-slate-700 rounded-full p-2 text-sm  cursor-pointer'
                        onClick={removeFromCart}>
                            Remove Item
                        </button>) :
                        (<button
                        className='group-hover:scale-105 whitespace-nowrap transition-all duration-300 ease-in group-hover:bg-gray-700 font-bold group-hover:text-white  uppercase border-2 border-slate-700 rounded-full p-2 text-sm  cursor-pointer'
                        onClick={addTocart}>
                            Add to Cart
                        </button>)
                    }
                </button>
            </div>
        </div>
    </div>
  )
}

export default Product