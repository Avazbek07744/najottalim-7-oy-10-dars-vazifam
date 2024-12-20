import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import lord from "../../axios";
import img3 from "../assets/Back.png"
import img4 from "../assets/Forward.png"
import img5 from "../assets/Play.png"
import img6 from "../assets/Search_S.svg"
import img7 from "../assets/Vector.svg"
import img8 from "../assets/Heart.svg"
import img9 from "../assets/clock.png"
import img10 from "../assets/options.png"

function Details() {
    const { id: playlistId } = useParams();
    const [details, setDetails] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [load, setLoad] = useState(true);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        if (playlistId) {
            lord(`https://api.spotify.com/v1/playlists/${playlistId}`)
                .then((response) => setDetails(response.data))
                .catch((error) => console.error(error));
        }
    }, [playlistId]);

    function MusicDuration(ms) {
        const minute = Math.floor(ms / 60000);
        const second = Math.floor((ms % 60000) / 1000);
        return `${minute}:${second < 10 ? "0" : ""}${second}`;
    }

    function playTrack(track) {
        if (currentSong?.id === track.id) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentSong(track);
            setIsPlaying(true);
        }
    }

    if (!details) return <div className="text-white">Loading...</div>;

    return (
        <div className="bg-stone-900">
            <div className="p-8 bg-gradient-to-b from-[#DDF628] to-black">
                <div className="flex gap-[22px] mt-10">
                    <img src={img3} alt="Go back" className="cursor-pointer" />
                    <img src={img4} alt="Go forward" className="cursor-pointer" />
                </div>
                <div className="flex gap-8 mt-[57px]">
                    <img
                        src={details.images[0]?.url}
                        alt={details.name}
                        className="w-[297px] h-[297px] rounded mb-4"
                    />
                    <div>
                        <h2 className="text-[80px] font-bold mb-4 text-white max-w-[659px]">
                            {details.name}
                        </h2>
                        <p className="text-white text-lg mb-4 max-w-[319px]">
                            {details.description}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-[400px] cursor-pointer">
                    <div className="flex gap-5 w-80">
                        <img
                            src={img5}
                            alt="play"
                            onClick={() => setIsPlaying(!isPlaying)}
                        />
                        <img src={img8} alt="heart" />
                        <img src={img10} width={44} height={44} alt="option" />
                    </div>
                    <div className="flex items-center gap-8">
                        <img src={img6} alt="search" />
                        <select name="" id="">
                            <option value="">Custom order</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center border-b-2 border-gray-500 pb-4 text-gray-600">
                    <span className="mr-[19px]">#</span>
                    <h5 className="mr-[291px]">TITLE</h5>
                    <h5 className="mr-[220px]">ALBUM</h5>
                    <h5 className="mr-[120px]">DATE ADDED</h5>
                    <img src={img9} alt="time" />
                </div>
            </div>
            <ul className="space-y-4 px-10">
                {details.tracks.items.map((track, index) => (
                    <li
                        key={index}
                        className={`flex items-center gap-4 text-white cursor-pointer ${currentSong?.id === track.track.id && isPlaying
                            ? "text-green-400"
                            : ""
                            }`}
                        onClick={() => playTrack(track.track)}
                    >
                        <span>{index + 1}</span>
                        {track.track.album.images[0] && (
                            <img
                                src={track.track.album.images[0].url}
                                alt={track.track.name}
                                className="w-12 h-12 rounded"
                            />
                        )}
                        <div className="flex-grow">
                            <p className="font-medium">{track.track.name}</p>
                            <p className="text-sm text-gray-400">
                                {track.track.artists.map((artist) => artist.name).join(", ")}
                            </p>
                        </div>
                        <p className="text-gray-400 mr-4">{track.track.album.name}</p>
                        <img className="w-6 mr-6" src={img7} alt="" />
                        <div className="flex items-center">
                            <span>{MusicDuration(track.track.duration_ms)}</span>
                        </div>
                    </li>
                ))}
            </ul>

            {currentSong && isPlaying && (
                <div className="fixed bottom-0 left-0 right-0 p-4 z-10 flex justify-center">
                    <ReactPlayer
                        url={currentSong.preview_url}
                        playing={isPlaying}
                        controls
                        width="58%"
                        height="50px"
                    />
                </div>
            )}
        </div>
    );
}

export default Details;
