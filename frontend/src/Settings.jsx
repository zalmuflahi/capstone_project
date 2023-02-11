import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
const Settings = ({ setUser}) => {
const navigate = useNavigate();

    const logout = () => {
        Cookies.remove('token')
        setUser({ username: '', followee: '', followers: '', posts: '', first_name: '', last_name: '' })  
        navigate('/')
    }
    return(
        <div>
            <button onClick={()=>{navigate('/profile')}}>Back</button>
            <button onClick={logout}>LOGOUT</button>
            <button onClick={() => navigate('/edit_profile')}>Edit Account👤</button>
            <button onClick={()=>navigate('/yes_i_am')}>Delete Account🗑</button>
        </div>
    )
}
export default Settings