import { useState } from 'react'
import Cookies from 'js-cookie'
import './Login/login.css'

export default function Likes({ post }) {
    const [likes_count, setLikes_count] = useState(post.likes_count)

    const handleLike = () => {
        if (!Cookies.get('token')) return;
        const request = async () => {
            let req = await fetch(`http://localhost:3000/toggle_likes/${post.id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': Cookies.get('token'),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    likes_count: likes_count + 1,
                    id: post.id
                }),
            });
            let res = await req.json()
            if (res) setLikes_count(res.likes_count)
        }
        if (Cookies.get('token'))
            request()
    }


    return (
       <div>
            <button className="btn-1" onClick={() => handleLike(post)} >
                
                    Likes {post.likes_count}
                
            </button>
        </div>
    )

}

