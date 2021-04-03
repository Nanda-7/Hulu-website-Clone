import React from "react";
import "./Nav.css";
import requestsUrl from "../../utils/requestsUrl";

const Nav = ({setSelectedOption}) => {
  return (
    <div className="nav">
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchTrending)}>Trending</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchAction)}>Action</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchComedy)}>Comedy</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchHorror)}>Horror</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchRomance)}>Romance</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchMystery)}>Mystery</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchSci)}>Sci-fi</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchWestern)}>Western</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchAnimation)}>Animation</h2>
      <h2 onClick={()=>setSelectedOption(requestsUrl.fetchTv)}>Movie</h2>
    </div>
  );
};

export default Nav;
