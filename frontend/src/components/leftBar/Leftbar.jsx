import './leftbar.scss';
import Following from '../../assets/1.png';
import Followers from '../../assets/5.png';
import Post from '../../assets/6.png';
import sms from '../../assets/3.png';
import YourStatuses from '../../assets/4.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';

const Leftbar = ({ user, setUser }) => {
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [showFollowings, setShowFollowings] = useState(false);
    const [showFollowers, setShowFollowers] = useState(false);
    const navigate = useNavigate();

    const getFollowings = async () => {
        const resp = await fetch(`http://localhost:3000/friends/${user.id}`, {
            headers: { Authorization: Cookies.get('token') },
        });
        const data = await resp.json();
        setFollowing(data.followees);
        setShowFollowings(true)
    };
    const getFollowers = async () => {
        const resp = await fetch(`http://localhost:3000/friends/${user.id}`, {
            headers: { Authorization: Cookies.get('token') },
        });
        const data1 = await resp.json();
        setFollowers(data1.followers);
        setShowFollowers(true)
    };

    const toggleFollowings = async () => {
        await getFollowings();
        setShowFollowings(!showFollowings);
    };
    
    const toggleFollowers = async () => {
        await getFollowers();
        setShowFollowers(!showFollowers);
    };

    
    return (
        <div className="Leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user" onClick={() => navigate('/profile')}>
                        <img src='https://www.iconpacks.net/icons/2/free-user-profile-icon-4255-thumb.png' alt="" />
                        <span>{user.username}</span>
                    </div>
                    <hr />
                    <div className="item" onClick={toggleFollowings}>
                        <img src={Following} alt="" />
                        <span>Following</span>
                    </div>
                    <hr />
                    {
                        showFollowings && following.map((follows) => (
                            <div key={follows.id}>
                                <h3>{follows.username}</h3>
                            </div>
                        ))}
                    <div className="item" onClick={toggleFollowers}>
                        <img src={Followers} alt="" />
                        <span>Followers</span>
                    </div>
                    <hr />
                    {
                        showFollowers && followers.map((follower) => (
                            <div key={follower.id}>
                                <h3>{follower.username}</h3>
                            </div>
                        ))}
                    <div className="item">
                        <div
                            className="post"
                            onClick={() => navigate('/upload')}
                            style={{ background: 'none', border: 'none', padding: '20px' }}
                        >
                            <img src={Post} alt="" />
                            <span>Upload</span>
                        </div>
                    </div>
                    <hr />
                    <div className="item">
                        <img src={YourStatuses} alt="" />
                        <span>My Posts</span>
                    </div>
                    <hr />
                    <div className="item" onClick={() => navigate('/sms')}>
                        <img src={sms} alt="" />
                        <span>Messages</span>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Leftbar;
