import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Post from "./components/Post.jsx"
import "./styles/Profile.scss"
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
            <div className="Profile-btns">
                <button onClick={() => { navigate('/newsfeed') }}>Back</button>
                <button onClick={() => { navigate('/settings') }}>⚙️</button>
            </div>

            <div className="Profile-main">
                <h1>{user.username}</h1>
                <p>Following: {user.followee}</p>
                <p>Followers: {user.followers}</p>

                <h2>Posts:</h2>
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