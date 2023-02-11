import { useRef,useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import Signup from './Signup';


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
            navigate("/newsfeed")
        }
        else {
            console.log("Login failed", res)
        }
    }
    useEffect(() =>{
        if(user.username){
            navigate("/newsfeed")
        }
    },[user])
    return (
        <div>
            <form onSubmit={handleSubmit} ref={form}>
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <button>LOGIN</button>
            </form>

            <br />
            <Signup />
        </div>
    )
}
export default Login