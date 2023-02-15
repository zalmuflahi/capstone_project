import { useState } from "react";
import Cookies from "js-cookie";

const Createcommentreply = ({ user, setUser}) => {
    const [reply, setReply] = useState('')
    const [error, setError] = useState('');


    const createReply = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get('token');
            if (!token) {
                throw new Error('No token found in cookies');
            }
            const req = await fetch(`http://localhost:3000/commentreply/${window.location.href.match(/\d+$/)[0]}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ reply }),
            });
            if (!req.ok) {
                throw new Error(`Request failed with status ${req.status}: ${req.statusText}`);
            }
            const res = await req.json();
            setUser(res.user);
        } catch (error) {
            setError(error.message);
        }
    };
    return(
        <div> 
            <form onSubmit={createReply}>
                <input
                    name="comment"
                    type="text"
                    placeholder="Comment on Comment"
                    onChange={(e) => setReply(e.target.value)}
                />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default Createcommentreply