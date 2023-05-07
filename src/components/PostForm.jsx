import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) =>{
    const [post, setPost] = useState({title: "" , body: ""});

    const addNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: "" , body: ""});
      }

    return(
        <form>
      <MyInput type="text" value={post.title} placeholder="Name of post" onChange={e => setPost({...post, title: e.target.value})}/>
        <MyInput type="text" value={post.body} placeholder="Discription of post" onChange={e => setPost({...post, body: e.target.value})}/>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    );
}
export default PostForm;