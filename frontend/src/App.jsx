import Login from './components/Login/Login'
import Homepage from './components/Home/Homepage'
import Profile from './components/Profile/Profile'
import Settings from './components/Profile/Settings'
import Signup from './components/Login/Signup'
import Areyousure from './components/ShadowRealm/Areyousure'
import Areyousureyousure from './components/ShadowRealm/Areyousureyousure'
import Youreallywantto from './components/ShadowRealm/Youreallywantto'
import Comments from './components/Comments/Comments.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState,useEffect } from 'react'
import PostContainer from './components/Post/PostContainer';
import Shadowrealm from './components/ShadowRealm/Shadowrealm'
import Editprofile from './components/Profile/Editprofile'
import Cookies from "js-cookie"
import CommentReply from './components/Comments/CommentReply'
import Messages from './components/messages/Messages'
import Chat from './components/messages/Chat'
import "./App.css"
function App({cable}) {
  const [user, setUser] = useState({ username: '', first_name: '', last_name: '', pfp_url: 'https://www.iconpacks.net/icons/2/free-user-profile-icon-4255-thumb.png', email: ''})
  

  const router = createBrowserRouter([
        {
          path: "/home",
          element: <Homepage user={user} setUser={setUser} />,
        }, 
        {
          path: "/sms",
          element: <Chat user={user} setUser={setUser} cable={cable}/>,
        }, 
        {
          path: "/room/:uuid",
          element: <Messages user={user} setUser={setUser} cable={cable}/>,
        }, 
        {
          path: "/profile",
          element: <Profile user={user} setUser={setUser} />,
        },
        {
          path: "/edit_profile",
          element: <Editprofile user={user} setUser={setUser} />,
        },
        {
          path: "/reply/:id",
          element: <CommentReply user={user} setUser={setUser}/>,
         },
        {
          path: "/settings",
          element: <Settings setUser={setUser} />,
        },
        {
          path: "/upload",
          element: <PostContainer user={user} setUser={setUser} />,
        },
        {
          path: "/comments/:id",
          element: <Comments user={user} setUser={setUser} />,
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
        },
    {
      path: "/",
      element: <Login user={user} setUser={setUser}/>,
    },
    {
      path: "/Signup",
      element: <Signup />,
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