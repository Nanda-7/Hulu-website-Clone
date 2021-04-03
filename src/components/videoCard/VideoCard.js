import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
import swal from 'sweetalert';
const imgUrl = "https://image.tmdb.org/t/p/original";

const VideoCard = forwardRef(({ movie }, ref) => {
  //{movie.release_date || movie.first_air_date}



    function viewPage(e) {
      e.preventDefault();
      var a=movie.title
      if(a===undefined){
        a=" the Movie"
      }
      swal({
       
        title: `Start your free trial to watch ${a}`,
        text: "Redirecting you to the login page!",
        timer: 3000,
        buttons: false
      });


      setTimeout(function(){

      window.location.href = "http://www.hulu.com/welcome"
       }, 3000);
      



    }


    
  return (
    <div onClick={viewPage}  ref={ref} className="videoCard">
      <img
        src={`${imgUrl}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <h2>{movie.title || movie.original_name}</h2>
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <p className="videoCardStats">
        <span className="type">{movie.media_type && movie.media_type}</span>
        <span className="date">
          {movie.release_date || movie.first_air_date}
        </span>
        <div className="rating">
          <ThumbUpSharp className="ratingIcon"/>
          {movie.vote_count}
        </div>
      </p>
    </div>
  );
});

export default VideoCard;
