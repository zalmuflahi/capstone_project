import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Cookies from 'js-cookie'
import "../Login/Login.css"

const Shadowrealm = ({user, setUser}) => {
    const navigate = useNavigate();
    const [banishment, setBanishment] = useState(false)
    const [error, setError] = useState(null);

    async function handleDelete() {
        setBanishment(true);

        try {
            const response = await fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'DELETE',
                headers: { 'Authorization': Cookies.get('token') }
            });

            if (!response.ok) {
                const errorMessage = await response.json();
                throw new Error(errorMessage.error);
            }

            setUser(null);
            navigate('/');
        } catch (e) {
            setError(e.message);
        } finally {
            setBanishment(false);
        }
    }

    return (
        <div className = 'login-box'>
            <h2>Are you sure you want to banish your Account to the Shadow Realm?</h2>
             {error && <div className="error">{error}</div>}
             <form>
            <button disabled={banishment} onClick={handleDelete} style={{ background: 'none', border: 'none', padding: '20px' }}>
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    YES DELETE MY ACCOUNT
                </a>
           </button>
            <button style={{ background: 'none', border: 'none', padding: '20px' }} type="submit" onClick={() => { navigate('/settings') }}>
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    NO
                </a>
            </button>
            </form>
        </div>
    )
}

export default Shadowrealm