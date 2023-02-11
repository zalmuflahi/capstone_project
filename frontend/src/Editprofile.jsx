import { useState } from 'react';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

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
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    New Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <button type='submit'>Save Changes</button>
                <button onClick={()=>{navigate('/settings')}}>Back</button>
            </form>
        </div>
    );
};

export default EditProfile;
