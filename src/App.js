import React, { useMemo, useRef, useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: "Javascript", body: "Good programing language"},
    {id: 2, title: "Java", body: "The Best programming language"},
    {id: 3, title: "Python", body: "The slowest programming language"}
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    if(filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const sortPosts = (sort) => {
    setFilter(sort);
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id));
  }


  return (
    <div className="App">
      <PostForm create = {createPost}/>
      <hr style={{margin: "15px 0"}}></hr>

      <PostFilter filter={filter} setFilter={setFilter}/>

      {sortedAndSearchedPosts.length !== 0
          ?<PostList remove = {removePost} posts={sortedAndSearchedPosts} title="List of posts 1"/>
          : <h1 style={{textAlign: "center"}}>Posts Not Found</h1>
      }
    </div>
  );
}

export default App;
