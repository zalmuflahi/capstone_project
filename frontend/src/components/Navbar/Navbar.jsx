import "./Navbar.scss"
import {
    HomeOutlined,
    DarkModeOutlined,
    WbSunnyOutlined,
    GridViewOutlined,
    NotificationsOutlined,
    EmailOutlined,
    PersonOutlined,
    SearchOutlined
} from '@mui/icons-material/'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.body.classList.remove('dark-mode');
        } else {
            document.body.classList.add('dark-mode');
        }
    };

    return (
        <div className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
            <div className='left'>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <span>No Case</span>
                </Link>
                <HomeOutlined onClick={() => navigate('/home')} />
                <DarkModeOutlined onClick={toggleDarkMode}>
                    {darkMode ? <WbSunnyOutlined /> : <WbSunnyOutlined />}
                </DarkModeOutlined>
                <GridViewOutlined />
                <div className='search'>
                    <SearchOutlined />
                    <input type='text' placeholder='Search...' />
                </div>
            </div>
            <div className='right'>
                <PersonOutlined onClick={() => navigate('/settings')} />
                <EmailOutlined />
                <NotificationsOutlined />
                <div className='user' onClick={() => navigate('/profile')}>
                    <img
                        src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600'
                        alt=''
                    />
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;