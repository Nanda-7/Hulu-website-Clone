import React from "react";
import "./Header.css";
import {
  Home,
  FlashOn,
  LiveTv,
  VideoLibrary,
  Search,
  PersonOutline,
} from "@material-ui/icons";
import abcd from './abcd.jpg'
import swal from 'sweetalert';

function funw(e) {
  e.preventDefault();
  swal({
    title: "Still Working!",
    text: "This feature is yet to be deployed.",
    icon: abcd
  });
         
}
const Header = () => {
  return (
    <div className="header">
      <div onClick={funw} className="headerIcons">
        <div className="headerIcon active">
          <Home />
          <p>Home</p>
        </div>
        <div className="headerIcon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="headerIcon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="headerIcon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="headerIcon">
          <Search />
          <p>Search</p>
        </div>
        <div className="headerIcon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-green-digital.png"
        alt=""
      />
    </div>
  );
};

export default Header;
