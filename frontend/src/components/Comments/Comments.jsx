import { useNavigate } from "react-router-dom"
import {useState, useEffect} from "react"
import Createcomments from "./Createcomments"
import Cookies from "js-cookie"
import Commentlikes from "./Commentlikes"
import Commentshare from "./Commentshare"

const Comments = ({user, setUser}) =>{
    const [comments, setComments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const loadComments = async () => {
            let req = await fetch(`http://localhost:3000/post_comments/${window.location.href.match(/\d+$/)[0]}`, {
                headers: { 'Authorization': Cookies.get('token') },
            })
           if (req.status === 200){
               let res = await req.json()
               setComments(res)
           }
        }
        if (Cookies.get('token')){
            loadComments()
        }
    }, [])

    return (
        <div>
            <button style={{ backgroundColor: 'lightgrey', border: 'lightgrey', height: '60px', width: '10%', padding: '10px' }} type="submit" onClick={() => { navigate('/home') }}>
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Back
                </a>
            </button>
            <div className='login-box' >
            <Createcomments user={user} setUser={setUser} />
            { comments.map((comment) => (
                <div key={comment.id}>
                <p>{comment.text}</p>
                <Commentlikes comment={comment} /> 
                    <button style={{ background: 'none', backgroundColor: 'lightgrey', border: '', padding: '5px' }} type="submit" onClick={() => { navigate(`/reply/${comment.id}`) }} >
                            Reply
                    </button >
                <Commentshare comment={comment}/>      
                </div>
            ))}
        </div>
        </div>
    )
}
export default Comments
