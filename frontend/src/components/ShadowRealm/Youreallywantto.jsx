import { useNavigate } from "react-router-dom";
import "../Login/Login.css"

const Youreallywantto = () => {
    const navigate = useNavigate();
    return (
        <div className='login-box'>
        <h2>Do you really want to delete your Account?</h2>
            <form>
            <button onClick={() => navigate('/shadowrealm')} style={{ background: 'none', border: 'none', padding: '0px'}}>
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    YES
                </a>
           </button>
            <button style={{ background: 'none', border: 'none', padding: '10px' }} type="submit" onClick={() => { navigate('/settings') }}>
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    No im beings held at gun point
                </a>
            </button>
            </form>
    </div >
    )
}
export default Youreallywantto