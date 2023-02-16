import { useRef,useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import './Login.css'


const Login = ({ user, setUser }) => {
    const form = useRef()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData(form.current)
        let req = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: formData
        })
        let res = await req.json()
        if (res.user) {
            Cookies.set('token', res.token)
            setUser(res.user)
            navigate("/home")
        }
        else {
            console.log("Login failed", res)
        }
    }
    useEffect(() =>{
        if(user.username){
            navigate("/")
        }
    },[user])
    
    return (
        <div className='login-box'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} ref={form}>
                <div className='user-box'><input name="email" type="email" placeholder="Email" /></div>
                <div className='user-box'><input name="password" type="password" placeholder="Password" /></div>
                <button style={{ background: 'none', border: 'none', padding: '20px' }} type="submit">
                    <a >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        LOGIN
                    </a>
                 </button>
                <button style={{ background: 'none', border: 'none', padding: '20px' }} type="submit" onClick={() => { navigate('/signup') }}>
                    <a >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        SIGNUP
                    </a>
                </button>
            </form>
        </div>
    )
}
export default Login