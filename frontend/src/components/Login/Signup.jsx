import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
const Signup = () => {
    const navigate = useNavigate()
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const createUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password, last_name, first_name }),
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            } else {
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='login-box'>
            <h2>Signup</h2>
            <form onSubmit={createUser}>
                {error && <p>{error}</p>}
                <div className="user-box">
                <input
                    type="text"
                    placeholder="First name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                />
                </div>
                <div className="user-box">
                <input
                    type="text"
                    placeholder="First name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                />
                </div>
                <div className="user-box">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
                <div className="user-box">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="user-box">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <button style={{ background: 'none', border: 'none', padding: '10px' }} type="submit" >
                    <a >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        CREATE
                    </a>
                </button>
                <button style={{ background: 'none', border: 'none', padding: '20px' }} onClick={()=>{navigate('/')}}>
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
    )
}

export default Signup