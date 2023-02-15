import { useNavigate } from "react-router-dom"
import "../Login/Login.css"

const Areyousure = () => {
    const navigate = useNavigate()
    return (
        <div className = 'login-box'>
            <h2>Are you sure?</h2>
            <form>
            <button onClick={() => navigate('/yes_delete_it')} style={{ background: 'none', border: 'none', padding: '20px' }}>
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    YES
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
    </div >
    )
}
export default Areyousure