import React, { useEffect } from 'react'
import img from '../assets/like.svg';
import img2 from '../assets/man.svg';

const Likes = () => {
    useEffect(()=>{
        fetch('https://redux.js.org/')
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    },[])
    return (
        <div>
            <div className=' h-[100vh] w-full'>
                <div className='bg-gradient-to-b from-[#604EC1] via-[#604EC1] to-black text-white'>
                    <div className='flex items-end gap-8 px-10 py-24'>
                        <img className='' src={img} width={207} alt="img" />
                        <div className='pb-3'>
                            <p className='text-base w-20'>PUBLIC PLAYLIST</p>
                            <h2 className='text-8xl font-bold'>Liked Songs</h2>
                            <span className='flex items-center gap-2 mt-2'>
                                <img className='rounded-full border'
                                    src={img2}
                                    width={30} height={30} alt="" />
                                <p>davedirect3</p>
                                <h6 className='p-1 bg-white w-max rounded-full'></h6>
                                <p>34 songs</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Likes
