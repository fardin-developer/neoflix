import React, { useEffect, useState } from "react";
import axios from "./axios";
import request from "./request";
import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const requests = await axios.get(request.fetchNetflixOriginals)
            let randomSelectFromArr = Math.floor(Math.random() * requests.data.results.length)
            setMovie(requests.data.results[randomSelectFromArr]);
            console.log(requests.data.results[randomSelectFromArr]);
        }
        fetchData()
    }, []);

    const truncate = (str,n)=>{
            return str?.length>n ? str.substr(0,n-1)+"...":str
    }

    return (
        <header>
            <div className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                    backgroundPosition: "center center"
                }}>
                <div className="banner_contents">
                    <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>

                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                    <h1 className="banner_description">{truncate(movie?.overview,150)}</h1>
                </div >
                <div className="banner--fadeBottom">
                
            </div>
            </div>
            
        </header>
    )
}

export default Banner
