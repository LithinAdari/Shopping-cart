import React, { useEffect } from 'react'
import { useState } from 'react';
import Spinner from '../components/Spinner'
import Product from '../components/Product';

const Home = () => {


    const API_URL = "https://fakestoreapi.com/products";

    const [loading , setLoading]  = useState(false);
    const [posts , setposts] = useState([]);

    async function fetchProductData () {

        setLoading(true);

        try{
            const resp = await fetch(API_URL);
            const data = await resp.json();

            setposts(data);
        }
        catch(e){
            console.log("Error occured", e);
            setposts([]);
        }

        setLoading(false);
    }


    useEffect( () => {
        fetchProductData();
    },[]);


  return (
    <div className=' w-full  flex items-center justify-center py-[2rem] '>
        {
            loading ? <Spinner/> :
            posts.length > 0 ?
            (<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-6xl gap-x-6 gap-y-8 mt-10 p-4'>
                {
                    posts.map( (post) => (
                        <Product key={post.id} post = {post}  />
                    ))
                }
            </div>) :
            <div>
                No data found
            </div>
        }
    </div>
  )
}

export default Home