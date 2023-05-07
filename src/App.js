import React, { useRef, useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Good programing language"},
    {id: 2, title: "Java", body: "The Best programming language"},
    {id: 3, title: "Python", body: "The slowest programming language"}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <PostList posts={posts} title="List of posts 1"/>
      
    </div>
  );
}

export default App;
