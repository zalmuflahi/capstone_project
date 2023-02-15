import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import Createcommentreply from "./Createcommentreply"
import Replylikes from "./Replylikes"

const CommentReply = ({ user, setUser }) => {
    const [commentreply, setCommentreply] = useState([])
    useEffect(() => {
        const loadCommentreply = async () => {
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
            <Createcommentreply user={user} setUser={setUser} />
            {
            commentreply.map((comment) => (
                <div key={comment.id}>
                    <p>{comment.reply}</p>
                    <Replylikes comment={comment}/>
                </div>
            ))}
        </div>
    )

}
export default CommentReply