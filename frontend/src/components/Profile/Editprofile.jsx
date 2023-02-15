import { useState } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
import "../Login/Login.css"

const EditProfile = ({ user, setUser }) => {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get('token');
            console.log(user)
            const res = await fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'PATCH',
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password, last_name, first_name }),
            });

            if (!res.ok) {
                const errorMessage = await response.json();
                throw new Error(errorMessage.error);
            }
            const data = await res.json()
            setUser(data);
            navigate('/profile');
        } catch (e) {
            setError(e.message);
        }
        }

    return (
        <div className='login-box'>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                    <div className='user-box'>
                        <h5>First name</h5>
                        <input
                            type="text"
                            value={first_name}
                            placeholder="First name"
                            onChange={(e) => setFirst_name(e.target.value)}
                        />
                    </div>
                <br />
                <div className='user-box'>
                    <h5>Last name</h5>
                    <input
                        type="text"
                        value={last_name}
                        placeholder="Last name"
                        onChange={(e) => setLast_name(e.target.value)}
                    />
                    </div>
                <br />
                <div className='user-box'>
                    <h5>Username</h5>
                    <input
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <br/>
                <div className='user-box'>
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br/>
                <button style={{ background: 'none', border: 'none', padding: '20px' }} type="submit">
                    <a >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        SAVE CHANGES
                    </a>
                </button>
                <button style={{ background: 'none', border: 'none', padding: '20px' }} type="submit" onClick={() => { navigate('/settings') }}>
                    <a >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        CANCEL
                    </a>
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
