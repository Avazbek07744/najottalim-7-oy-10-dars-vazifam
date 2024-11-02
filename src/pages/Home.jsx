import React, { useEffect, useState } from 'react';
import img from '../assets/like.svg';
import img2 from '../assets/man.svg';
import lord from '../../axios';

const Home = () => {
    const [featured, setFeatured] = useState([]);
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState([]);
    const [recently, setRecently] = useState([]);
    const [jump, setJump] = useState([]);
    const [uniquely, setUniquely] = useState([]);
    const [more, setMore] = useState(false);
    const [see, setSee] = useState(4);

    useEffect(() => {
        lord.get('featured-playlists')
            .then(response => setFeatured(response.data.playlists.items))
            .catch(error => console.log('Xatolik:', error));
    }, []);

    useEffect(() => {
        lord.get('categories/toplists/playlists')
            .then(res => setCategories(res.data.playlists.items))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        lord.get('categories/0JQ5DAqbMKFHOzuVTgTizF/playlists')
            .then(res => setMode(res.data.playlists.items))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        lord.get('categories/0JQ5DAqbMKFQ00XGBls6ym/playlists')
            .then(res => setRecently(res.data.playlists.items))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        lord.get('categories/0JQ5DAqbMKFLVaM30PMBm4/playlists')
            .then(res => setJump(res.data.playlists.items))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        lord.get('categories/0JQ5DAqbMKFCbimwdOYlsl/playlists')
            .then(res => setUniquely(res.data.playlists.items))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div className='bg-gradient-to-b from-[#604EC1] via-[#604EC1] to-black text-white p-10'>
                <h1 className='text-4xl mb-7 font-semibold'>Good afternoon</h1>
                <div className='flex flex-wrap justify-between gap-4'>
                    {featured.slice(0, 6).map((value, index) => (
                        <div key={index} className='backdrop-sepia-0 bg-white/30 mb-2 w-[380px] flex gap-2 rounded-md items-center'>
                            {value.images?.map((v, i) => (
                                <img key={i} className='' width={80} src={v.url} alt="" />
                            ))}
                            <h4 className='text-base capitalize font-semibold'>{value.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-black text-white px-10 pb-20'>
                {[{ title: "Your top mixes", data: categories }, 
                  { title: "Made for you", data: mode }, 
                  { title: "Recently played", data: recently }, 
                  { title: "Jump back in", data: jump }, 
                  { title: "Uniquely yours", data: uniquely }].map((section, sectionIndex) => (
                    <div className='mb-12' key={sectionIndex}>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-3xl mb-7 font-semibold'>{section.title}</h1>
                            <button onClick={() => setSee(10)} className='uppercase font-semibold text-[#ADADAD]'>see all</button>
                        </div>
                        <div className='flex flex-wrap gap-4 h-max'>
                            {section.data.slice(0, see).map((value, index) => (
                                <div key={index} className='backdrop-sepia-0 bg-white/10 mb-2 w-[214px] flex flex-col gap-2 rounded-md items-center py-5'>
                                    {value.images?.map((v, i) => (
                                        <img key={i} className='' width={182} src={v.url} alt="" />
                                    ))}
                                    <h4 className='text-xl capitalize font-semibold'>{value.name}</h4>
                                    <div className='text-lg capitalize font-semibold text-[#B3B3B3] line-clamp-1'>
                                        <p className={`${!more ? '' : 'line-clamp-4'}`}>{value.description}</p>
                                    </div>
                                    <button className='text-[#B3B3B3] text-xl my-2' onClick={() => setMore(!more)}>
                                        {more ? 'Show less' : 'Learn more'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        // <div className=' h-[100vh] w-full'>
        //     <div className='bg-gradient-to-b from-[#604EC1] via-[#604EC1] to-black text-white'>
        //         <div className='flex items-end gap-8 px-10 py-24'>
        //             <img className='' src={img} width={207} alt="img" />
        //             <div className='pb-3'>
        //                 <p className='text-base w-20'>PUBLIC PLAYLIST</p>
        //                 <h2 className='text-8xl font-bold'>Liked Songs</h2>
        //                 <span className='flex items-center gap-2 mt-2'>
        //                     <img className='rounded-full border'
        //                     src={img2}
        //                     width={30} height={30} alt="" />
        //                     <p>davedirect3</p>
        //                     <h6 className='p-1 bg-white w-max rounded-full'></h6>
        //                     <p>34 songs</p>
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Home
