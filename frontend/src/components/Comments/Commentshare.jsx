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
            <form>
            <button style={{ background: 'none', border: 'none', padding: '0px' }} onClick={commentShare}>
                <a >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Share
                </a>
            </button>
            <hr/>
                </form>
        </div>
    );
};

export default Commentshare;