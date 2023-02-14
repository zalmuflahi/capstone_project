import './leftbar.scss'
import Following from '../../assets/1.png'
import Followers from '../../assets/5.png'
import YourImages from '../../assets/2.png'
import Post from '../../assets/6.png'
import sms from '../../assets/3.png'
import YourStatuses from '../../assets/4.png'
import { useNavigate } from 'react-router-dom'

const Leftbar = () => {
    const navigate = useNavigate()
    return (
            <div className="Leftbar">
                <div className='container'>
                   <div className='menu'>
                        <div className='user' onClick={()=>{navigate('/profile')}}>
                            <img src='https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                            <span>John Doe</span>
                        </div>
                        <hr />
                        <div className='item'>
                            <img src={Following} alt="" />
                            <span>Following</span>
                        </div>
                        <hr />
                        <div className='item'>
                            <img src={Followers} alt="" />
                            <span>Followers</span>
                        </div>
                        <hr />
                        <div className='item'>
                            <img src={YourImages} alt="" />
                            <span>My Images</span>
                        </div>
                        <hr />
                        <div className='item'>
                            <div className='post' onClick={() => { navigate('/upload') }} style={{ background: 'none', border: 'none', padding: '20px' }}>
                                <img src={Post} alt="" />
                                <span>Upload</span>
                            </div>
                        </div>
                        <hr />
                        <div className='item'>
                            <img src={YourStatuses} alt="" />
                            <span>My Statuses</span>
                        </div>
                        <hr />
                        <div className='item'>
                            <img src={sms} alt="" />
                            <span>Messages</span>
                        </div>
                        <hr />
                   </div>
                </div>
            </div>
    )
}
export default Leftbar
