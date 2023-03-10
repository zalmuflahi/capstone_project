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
            if (req.status === 200) {
                let res = await req.json()
                setPosts(res);
            }
        }
        if (Cookies.get('token'))
            loadFeed()
    }, [])

    return (
        <div>
            <Navbar user={user}/>
            <div className='homepage'>
                <div className='post-container'>
                    <Leftbar user={user} setUser={user} />
                    <div className='scroll-container'>
                        {posts.map(post => (
                            <div key={post.id} className='scroll-page'>
                                <img src={post.image_url} alt={post.caption} />
                                <p style={{ fontSize: '50px' }}>{post.caption}</p>
                                <div >
                                    <Likes post={post} />
                                    <button className="btn-1" onClick={() => { navigate(`/comments/${post.id}`) }}>Comment</button>
                                    <Share post={post} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
