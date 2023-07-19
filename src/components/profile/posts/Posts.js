import React from "react";
import Post from "./post/Post";

function Posts(props){
    return(
        <div className="posts">
          <input placeholder="enter the post"/>
          <button>Add post</button>
          <Post message="здесь уже есть текст" name={props.name} />
          <Post message="Рецепт пирога" name={props.name}/>
          <Post message="Казино онлайн"name={props.name}/>
        </div>
    )
}
export default Posts;