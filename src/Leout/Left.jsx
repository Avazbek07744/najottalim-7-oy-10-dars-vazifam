import React from 'react'
import img from '../assets/like.svg';
import { useNavigate } from 'react-router-dom';

const Left = () => {
    const navigate = useNavigate()
    function navigateLike() {
        navigate('/like')
    }
    return (
        <div className='px-6 py-[20px]'>
            <div className='flex flex-col gap-5'>
                <h2>Home</h2>
                <h3>Search</h3>
                <h3>Your library</h3>
            </div>
            <div className='mt-[29px]'>
                <div className='flex gap-5 items-center mb-3'>
                    <span className='flex items-center justify-center w-8 h-8 pb-1 bg-[#b2b2b2] text-[#000] font-semibold text-3xl'>+</span>
                    <p>Create Playlist</p>
                </div>
                <div className='flex gap-5 items-center mb-3 text-white'>
                    <img src={img} width={32} alt="" />
                    <button className='' onClick={navigateLike}>Liked Songs</button>
                </div>
                <div>
                    <ul className='flex flex-col gap-[10px]'>
                        <li className='cursor-pointer'>Chill Mix</li>
                        <li className='cursor-pointer'>Insta Hits</li>
                        <li className='cursor-pointer'>Your Top Songs 2021</li>
                        <li className='cursor-pointer'>Mellow Songs</li>
                        <li className='cursor-pointer'>Anime Lofi & Chillhop Music</li>
                        <li className='cursor-pointer'>BG Afro “Select” Vibes</li>
                        <li className='cursor-pointer'>Afro “Select” Vibes</li>
                        <li className='cursor-pointer'>Happy Hits!</li>
                        <li className='cursor-pointer'>Deep Focus</li>
                        <li className='cursor-pointer'>Instrumental Study</li>
                        <li className='cursor-pointer'>OST Compilations</li>
                        <li className='cursor-pointer'>Nostalgia for old souled mill...</li>
                        <li className='cursor-pointer'>Mixed Feelings</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Left
