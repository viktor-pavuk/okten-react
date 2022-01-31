import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/post.slice";
import Post from "../Post/Post";

const Posts = () => {
    const {posts} = useSelector(state => state["postReducer"]);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPosts());
    },[])
    return (
        <div>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;