import { useNavigate } from "react-router-dom"

const Areyousureyousure = () => {
    const navigate = useNavigate()
return (
    <div>
        <p>Are you sure that you are sure?</p>
        <button onClick={() => { navigate('/door2shadowrealm')}}>Yes</button>
        <button onClick={()=>{navigate('/settings')}}>No</button>
    </div>
)
}
export default Areyousureyousure