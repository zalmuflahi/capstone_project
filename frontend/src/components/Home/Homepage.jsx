import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import Likes from '../Likes'
import Share from '../Share'
import './Homepage.scss'
import Navbar from "../Navbar/Navbar";
import Leftbar from "../leftBar/Leftbar";


const Homepage = ({ user, setUser }) => {
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
            <Navbar />
        <div className='homepage'>
                <div className='post-container'>
                    <Leftbar />
                    {posts.map(post => (
                        <div key={post.id} >
                            <p>{post.image_url}</p>
                            <p>{post.caption}</p>
                            <Likes post={post} />
                            <button onClick={() => { navigate(`/comments/${post.id}`) }}>Comment</button>
                            <Share post={post} />
                        </div>
                    ))}
                </div>
        </div>
        </div>
    )
}

export default Homepage
