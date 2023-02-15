import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const PostContainer = ({ setUser }) => {
    const [caption, setCaption] = useState('');
    const [image_url, setImage_url] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const createPost = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get('token');
            if (!token) {
                throw new Error('No token found in cookies');
            }
            const req = await fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ caption, image_url }),
            });
            if (!req.ok) {
                throw new Error(`Request failed with status ${req.status}: ${req.statusText}`);
            }
            const res = await req.json();
            setUser(res.user);
            navigate('/home')
        } catch (error) {
            setError(error.message);
        }
    };


    return (
        <div className='login-box'>
            <form onSubmit={createPost}>
                {error && <p>{error}</p>}
                <div className='user-box'>
                <input
                    type="text"
                    placeholder="Status"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
                </div>
                <div className='user-box'>
                <input
                    type="text"
                    placeholder="upload Image"
                    value={image_url}
                    onChange={(e) => setImage_url(e.target.value)}
                />
                </div>
                <button style={{ background: 'none', border: 'none', padding: '0px' }} type="submit">
                    <a >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Create Post
                    </a>
                </button>
                <button style={{ background: 'none', border: 'none', padding: '0px' }} type="submit" onClick={() => { navigate('/home') }}>
                    <a >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Cancel
                    </a>
                </button>
            </form>
        </div>
    );
};

export default PostContainer;
