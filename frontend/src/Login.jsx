import { useState, useRef, useEffect } from 'react'
import Cookies from 'js-cookie'
import Profile from './Profile'

const Login = () => {
    const [user, setUser] = useState(null)
    const form = useRef()

    useEffect(() => {
        const loadUser = async () => {
            let req = await fetch('http://localhost:3000/me', {
                headers: { 'Authorization': Cookies.get('token') }
            })
            let res = await req.json()
            if (res.user) setUser(res.user)
        }
        if (Cookies.get('token'))
            loadUser()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData(form.current)
        let req = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: formData
        }
        )
        let res = await req.json()
        Cookies.set('token', res.token)
        setUser(res.user)
    }
return (
<div>
            {user && <Profile user={user} />}
            <form onSubmit={handleSubmit} ref={form}>
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <button>LOGIN</button>
            </form>
            <br />
</div>
)
}

export default Login