import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

const Homepage = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const loadFeed = async () => {
            let req = await fetch('http://localhost:3000/feed', {
                headers: { 'Authorization': Cookies.get('token') }
            })
            let res = await req.json()
            if (res.posts) setPosts(res.posts);
        }
        if (Cookies.get('token'))
            loadFeed()
    }, [])

    return (
        <div>
            <div>
                <button onClick={() => { navigate('/upload') }}>Upload</button>
                <button onClick={() => { navigate('/profile') }}>Profile</button>
            </div>
            {posts.map(post => (
                <div key={post.id}>
                    <p>{post.caption}</p>
                    <p>{post.likes_count}</p>
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>

                </div>
            ))}
        </div>
    )
}

export default Homepage
