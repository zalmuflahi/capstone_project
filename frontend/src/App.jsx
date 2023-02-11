import Login from './Login'
import Homepage from './Homepage'
import Profile from './Profile'
import Settings from './Settings'
import Areyousure from './ShadowRealm/Areyousure'
import Areyousureyousure from './ShadowRealm/Areyousureyousure'
import Youreallywantto from './ShadowRealm/Youreallywantto'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState,useEffect } from 'react'
import PostContainer from './PostContainer';
import Shadowrealm from './ShadowRealm/Shadowrealm'
import Editprofile from './Editprofile'
import Cookies from "js-cookie"

function App() {
  const [user, setUser] = useState({ username:'', followee: '', followers: '', posts:'', first_name: '', last_name: ''})
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login user={user} setUser={setUser}/>,
    },
    {
      path: "/newsfeed",
      element: <Homepage />,
    },
    ,
    {
      path: "/edit_profile",
      element: <Editprofile user={user} setUser={setUser} />,
    },
    {
      path: "/profile",
      element: <Profile user={user} setUser={setUser}/>,
    },
    {
      path: "/settings",
      element: <Settings setUser={setUser} />,
    },
    {
      path: "/upload",
      element: <PostContainer user={user} setUser={setUser}/>,
    },
    {
      path: "/yes_delete_it",
      element: <Areyousureyousure />,
    },
    {
      path: "/yes_i_am",
      element: <Areyousure />,
    },
    {
      path: "/door2shadowrealm",
      element: <Youreallywantto />,
    },
    {
      path: "/shadowrealm",
      element: <Shadowrealm user={user} setUser={setUser} />,
    }
  ]);

  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch('http://localhost:3000/me', {
        headers: { 'Authorization': Cookies.get('token') },
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token'))
      loadUser()
  }, [])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}
export default App