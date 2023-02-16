import { useState } from "react";
import Cookies from "js-cookie";

const Commentshare = ({ comment }) => {
    const [commentShared, setCommentShared] = useState(false);

const commentShare = async () => {
    try {
        const response = await fetch(`http://localhost:3000/sharedcomment/${comment.id}`, {
            headers: { "Authorization": Cookies.get("token") }
        });
        const data = await response.json();
        if (response.ok) {
            setCommentShared(true);
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error(error);
    }
}

    return (
        <div>
            <button style={{ background: 'none', backgroundColor: 'lightgrey', border: 'none', padding: '5px' }} onClick={commentShare}>
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Share
                </a>
            </button>
        </div>
    );
};

export default Commentshare;