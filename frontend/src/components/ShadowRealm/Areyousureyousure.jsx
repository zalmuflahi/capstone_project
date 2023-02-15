import { useNavigate } from "react-router-dom"
import "../Login/Login.css"

const Areyousureyousure = () => {
    const navigate = useNavigate()
return (
          <div className = 'login-box'>
        <h2>Are you sure that you sure?</h2>
            <form>
            <button onClick={() => navigate('/door2shadowrealm')} style={{ background: 'none', border: 'none', padding: '20px' }}>
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
export default Areyousureyousure