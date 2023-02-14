import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Post from "../Post/Post.jsx"
import "./Profile.scss"
const Profile = ({ user, setUser }) => {
    const navigate = useNavigate()
    const [userposts, setUserposts] = useState([])

    useEffect(() => {
        const request = async () => {
            let req = await fetch(`http://localhost:3000/posts/${user.id}`, {
                headers: { 'Authorization': Cookies.get('token') },
            })
            let res = await req.json()
            setUserposts(res)
        }
        if (user.username){
            request()
        }else{
            navigate("/")
        }
    }, [user])

    return (
        <div className="Profile">
            <div className="Profile-main">
                <img src={user.pfp} alt={user.username}/>
                <h1>{user.username}</h1>
                <p>Following: {user.followee}</p>
                <p>Followers: {user.followers}</p>
                <hr/>
                <h2>Posts</h2>
                <div className="Profile-main-container">
                    {userposts.map(post => (
                        <Post post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile