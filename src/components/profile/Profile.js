import React from "react";
import "./Profile.css";
import ava from "../img/iconprofile.jpg";
import ava_mini from "../img/iconprofile.jpg";

function Profile(){
    return(
      <div className="profile">
        <div className="me">
          <img src={ava} alt="profile photo"/>
          <p>No Name</p>
        </div>
        <div className="posts">
          <input placeholder="enter the post"/>
          <button>Add post</button>
        </div>
        <div className="post">
          <img src={ava_mini} alt="prodile mini photo"/>
          <span>No Name</span>
          <p>Text for message</p>
        </div>
      </div>
    )
}
export default Profile;