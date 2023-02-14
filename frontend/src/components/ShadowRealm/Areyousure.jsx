import { useNavigate } from "react-router-dom"

const Areyousure = () => {
    const navigate = useNavigate()
    return (
        <>
            <p>Are you sure?</p>
            <button onClick={() => navigate('/yes_delete_it')}>Yes</button>
            <button onClick={() => navigate('/settings')}>No</button>
    </>
    )
}
export default Areyousure