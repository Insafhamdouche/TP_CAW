import React , { useState }from 'react'
import { Link, Outlet } from 'react-router-dom'
import CreatePost from '../Components/CreatePost';
import {useEffect} from 'react'
import  { AiFillHome } from "react-icons/ai";
import PostList from '../Components/PostList';



const Blog = () => {

    
  function Post({ item }) {
    getItem()
    const [postList, setPostList] = useState(getItem())
    useEffect(() => {
        localStorage.setItem('blogs', JSON.stringify(postList))
    }, [postList]);
    if (item.co2 === true) {
        return (<PostList postList={postList} />)
    }
    if (item.co2 === false) {
        return (<CreatePost setPostList={setPostList} postList={postList} />)
    }
}

 const [co2, setCo2] = useState(null);

  return (
     <div className="contact">
      <p>Blog <span>( click on the Display Blogs button or create Blog button)</span></p> 
      <div  className="Buttons">
        <button onClick={(e) => { e.preventDefault(); setCo2(true) }}> List All Posts</button>
        <button onClick={(e) => { e.preventDefault(); setCo2(false) }}> Create Post </button>
        
        <Post item={{ co2 }} />
      </div>
      <Link to="/"><AiFillHome className='iconeHome'/></Link>
    </div>
    
    )	



}
const getItem = () => {
    let PostList = localStorage.getItem('blogs');
    console.log(PostList);
    if (PostList) {
        return JSON.parse(localStorage.getItem('blogs'))
    } else {
        return [];
    }
}

export default Blog








