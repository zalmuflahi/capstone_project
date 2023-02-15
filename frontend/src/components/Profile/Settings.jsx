import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import "../Login/Login.css"

const Settings = ({ setUser }) => {
    const navigate = useNavigate();

    const logout = () => {
        Cookies.remove('token')
        setUser({ username: '', followee: '', followers: '', posts: '', first_name: '', last_name: '' })
        navigate('/')
    }
    return (
        <div>
            <Navbar />
            <div className='login-box'>
                <h2>Settings</h2>
                <form>
                    <button style={{ background: 'none', border: 'none', padding: '20px' }} type="submit" onClick={() => { navigate('/profile') }}>
                        <a >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            BACK
                        </a>
                    </button>
                    <button style={{ background: 'none', border: 'none', padding: '20px' }} type="submit" onClick={logout}>
                        <a >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            LOGOUT
                        </a>
                    </button>
                    <button style={{ background: 'none', border: 'none', padding: '20px' }} type="submit" onClick={() => navigate('/edit_profile')}>
                        <a >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            EDIT ACCOUNT👤
                        </a>
                    </button>
                    <button style={{ background: 'none', border: 'none', padding: '20px' }} type="submit" onClick={() => navigate('/yes_i_am')}>
                        <a >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            DELETE ACCOUNT🗑
                        </a>
                    </button>
                </form>
            </div>
            </div >
      
    )
}
export default Settings