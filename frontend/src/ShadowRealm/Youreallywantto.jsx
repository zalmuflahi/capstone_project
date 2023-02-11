import { useNavigate } from "react-router-dom";
const Youreallywantto = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p>do you really want to delete your Account?</p>
            <button onClick={()=> {navigate('/shadowrealm')}}>Yes</button>
            <button onClick={() => { navigate('/settings') }}>No im beings held at gun point</button>
        </div>
    )
}
export default Youreallywantto