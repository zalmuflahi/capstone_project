import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import Createcommentreply from "./Createcommentreply"
import Replylikes from "./Replylikes"
import { useNavigate } from "react-router-dom"

const CommentReply = ({ user, setUser }) => {
    const [commentreply, setCommentreply] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const loadCommentreply = async (uuid) => {
            let req = await fetch(`http://localhost:3000/commentreply/${window.location.href.match(/\d+$/)[0]}`, {
                headers: { 'Authorization': Cookies.get('token') },
            })
            let res = await req.json()
            if (req.status === 200) {
                setCommentreply(res)
            }
            console.log(res)
        }
        if (Cookies.get('token')) {
            loadCommentreply()
        }
    }, [])

    return (
        <div>
            <button style={{ backgroundColor: 'lightgrey', height: '60px', width: '10%', padding: '10px' }} type="submit" onClick={() => { navigate(`/home`) }}>
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Back
                </a>
                </button>
        <div className='login-box'>
            <Createcommentreply user={user} setUser={setUser} />
            {
            commentreply.map((comment) => (
                <div key={comment.id}>
                    <h2>{user.username}</h2>
                    <h3>{comment.reply}</h3>
                    <Replylikes comment={comment}/>
                </div>
            ))}
        </div>
        </div>
    )

}
export default CommentReply