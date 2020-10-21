import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../requests";
import "./Banner.css";

const Banner = () => {
 const [movie, setMovie] = useState([]);

 useEffect(() => {
  async function fetchData() {
   const request = await axios.get(requests.fetchNetflixOriginals);
   setMovie(
    request.data.results[
     Math.floor(Math.random() * request.data.results.length)
    ]
   );
   return request;
  }
  fetchData();
 }, []);

 const truncate = (str, n) =>
  str?.length > n ? str.substr(0, n - 1) + "..." : str;

 console.log(movie);

 return (
  <header
   className="banner"
   style={{
    backgroundSize: "cover",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
   }}
  >
   <div className="banner__contents">
    {/* Title */}
    <div className="banner__title">
     <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
    </div>
    {/* div > 2 buttons */}
    <div className="banner__buttons">
     <button className="banner__button">Play</button>
     <button className="banner__button">My List</button>
    </div>
    {/* description  */}
    <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
   </div>
   <div className="banner--fadebottom" />
  </header>
 );
};

export default Banner;
