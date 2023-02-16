import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Followers = () => {
    const [count, setCount] = useState({});

    useEffect(() => {
        async function fetchCount() {
            const resp = await fetch(`http://localhost:3000/me`, {
                headers: { 'Authorization': Cookies.get('token') },
            });
            const data = await resp.json();
            setCount(data);
        }
        fetchCount();
    }, []);

    return (
        <div>
            <p>Followers: {count.followers_count}</p>
            <p>Following: {count.followees_count}</p>
        </div>
    );
}

export default Followers
    