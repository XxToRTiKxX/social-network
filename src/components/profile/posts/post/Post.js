import React from "react";
import ava_mini from "../../../img/iconprofile.jpg";

function Post(props){
    return(
        <div className="post">
            <img src={ava_mini} alt="prodile mini photo"/>
            <span>{props.name}</span>
            <p>{props.message}</p>
        </div>
    )
}
export default Post;