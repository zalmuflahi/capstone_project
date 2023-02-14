import { useState } from 'react'
import Cookies from 'js-cookie'

export default function Commentlikes({ comment }) {
    const [heart_count, setHeart_count] = useState(comment.heart_count)

    const clicklike = async () => {
        if (!Cookies.get('token')) return;
        let req = await fetch(`http://localhost:3000/hearts/${comment.id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': Cookies.get('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                heart_count: heart_count + 1,
                id: comment.id
            }),
        });
        let res = await req.json()
        if (res) setHeart_count(res.heart_count)
        console.log(res)
    }

    return (
        <div className="likesButton">
            <p>{comment.heart_count}</p>
            <button onClick={() => { clicklike(comment) }}>Like</button>
        </div>
    )

}