import {useState} from 'react'
import Cookies from 'js-cookie'

const Createcomments =({user, setUser}) => {
const [text, setText] = useState('')
const [error, setError] = useState('');

    const createComment = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get('token');
            if (!token) {
                throw new Error('No token found in cookies');
            }
            const req = await fetch(`http://localhost:3000/createcomment/${window.location.href.match(/\d+$/)[0]}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ text }),
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



return (
    <div>
        <form onSubmit={createComment}>
            {error && <p>{error}</p>}
            <div className='user-box'><input
            name="comment" 
            type="text" 
            placeholder="Comment on Post" 
            onChange={(e) => setText(e.target.value)}
            />
            </div>
            <button style={{ background: 'none', border: 'none', padding: '0px' }} type="submit">
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Post
                </a>
            </button>
            <hr styles={{ borderColor: 'black' }} />
        </form>
    </div>
)
}

export default Createcomments