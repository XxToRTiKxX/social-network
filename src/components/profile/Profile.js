import React from "react";
import "./Profile.css";
import ava from "../img/iconprofile.jpg";
import Posts from "./posts/Posts";

function Profile(props){
    return(
      <div className="profile">
        <div className="me">
          <img src={ava} alt="profile photo"/>
          <p>{props.name}</p>
        </div>
        <Posts name={props.name} />
      </div>
    )
}
export default Profile;