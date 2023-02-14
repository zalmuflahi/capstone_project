import { useState } from "react";
import Cookies from "js-cookie";

const Share = ({ post }) => {
    const [isShared, setIsShared] = useState(false);

    const handleShare = async () => {
        try {
            const response = await fetch(`http://localhost:3000/share/${post.id}`, {
                headers: { "Authorization": Cookies.get("token") }
});
        const data = await response.json();
        if (response.ok) {
            setIsShared(true);
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error(error);
    }
};

return (
    <div>
            <button onClick={handleShare}>Share</button>
    </div>
);
};

export default Share;

