import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lord from '../../axios';

const Home = () => {
    const navigate = useNavigate();
    const [featured, setFeatured] = useState([]);
    const [categories, setCategories] = useState([]);
    const [mode, setMode] = useState([]);
    const [recently, setRecently] = useState([]);
    const [jump, setJump] = useState([]);
    const [uniquely, setUniquely] = useState([]);
    const [more, setMore] = useState(false);
    const [see1, setSee1] = useState(4);
    const [see2, setSee2] = useState(4);
    const [see3, setSee3] = useState(4);
    const [see4, setSee4] = useState(4);
    const [see5, setSee5] = useState(4);
    const [see6, setSee6] = useState(4);
    const [see7, setSee7] = useState(4);

    useEffect(() => {
        lord.get('featured-playlists')
            .then(response => setFeatured(response.data.playlists.items))
            .catch(error => console.log('Xatolik:', error));
    }, []);

    useEffect(() => {
        lord.get('categories/toplists/playlists')
            .then(res => setCategories(res.data.playlists.items))
            .catch(err => console.log('Xatolik:', err));
    }, []);

    useEffect(() => {
        lord.get('categories/0JQ5DAqbMKFHOzuVTgTizF/playlists')
            .then(res => setMode(res.data.playlists.items))
            .catch(err => console.log('Xatolik:', err));
    }, []);

    useEffect(() => {
        lord.get('categories/0JQ5DAqbMKFQ00XGBls6ym/playlists')
            .then(res => setRecently(res.data.playlists.items))
            .catch(err => console.log('Xatolik:', err));
    }, []);

    useEffect(() => {
        lord.get('categories/0JQ5DAqbMKFLVaM30PMBm4/playlists')
            .then(res => setJump(res.data.playlists.items))
            .catch(err => console.log('Xatolik:', err));
    }, []);

    useEffect(() => {
        lord.get('categories/0JQ5DAqbMKFCbimwdOYlsl/playlists')
            .then(res => setUniquely(res.data.playlists.items))
            .catch(err => console.log('Xatolik:', err));
    }, []);

    const handlePlaylistClick = (id) => {
        navigate(`/details/${id}`);
    };

    return (
        <div>
            <div className='bg-gradient-to-b from-[#604EC1] via-[#604EC1] to-black text-white p-10'>
                <h1 className='text-4xl mb-7 font-semibold'>Good afternoon</h1>
                <div className='flex flex-wrap justify-between gap-4'>
                    {featured.slice(0, 6).map((item, index) => (
                        <div key={index} className='bg-white/30 mb-2 w-[380px] flex gap-2 rounded-md items-center'>
                            {item.images?.map((img, i) => (
                                <img key={i} width={80} src={img.url} alt="" />
                            ))}
                            <h4 className='text-base capitalize font-semibold'>{item.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-black text-white px-10 pb-20'>
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl mb-7 font-semibold'>Your top mixes</h1>
                        <button onClick={() => setSee1(10)} className='uppercase font-semibold text-[#ADADAD]'>
                            See All
                        </button>
                    </div>
                    {

                        categories.length && categories.slice(0, see1).map((value, index) => {
                            console.log(value);
                            
                            <div className='w-[224px]' key={index}>
                                {/* <img src={} alt="" /> */}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
