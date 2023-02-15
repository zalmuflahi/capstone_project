import "./Navbar.scss"
import {HomeOutlined,
    DarkModeOutlined, 
    WbSunnyOutlined, 
    GridViewOutlined, 
    NotificationsOutlined, 
    EmailOutlined, 
    PersonOutlined, 
    SearchOutlined} from '@mui/icons-material/'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
   const navigate = useNavigate()
    return (
        <div className='navbar'>
            <div className='left'>
                <Link to='/home' style={{textDecoration:"none"}}>
                <span>No Case</span>
                </Link>
                <HomeOutlined onClick={()=>{navigate('/home')}}/>
                <DarkModeOutlined />
                <GridViewOutlined />
                <div className='search'>
                    <SearchOutlined />
                    <input type='text' placeholder='Search...'/>
                </div>
            </div>
            <div className='right'>
                <PersonOutlined onClick={()=>navigate('/settings')}/>
                <EmailOutlined/>
                <NotificationsOutlined />
                <div className='user' onClick={()=>{navigate('/profile')}}>
                    <img src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar