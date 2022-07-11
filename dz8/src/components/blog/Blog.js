import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function Blog() {
<<<<<<< HEAD
    const params = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
            .then(response => response.json())
            .then(data => setPost(data))

    },[])
=======
    const [post, setPost] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.name}`)
            .then(response => response.json())
            .then(data => setPost(data))
    }, [])
>>>>>>> origin/master

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default Blog;