import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
function Chat({cable}) {
    const navigate = useNavigate()
    const [rooms,setRooms] = useState([])
    const fetchRoom = async () =>{
        const token = Cookies.get('token');
        
        const req = await fetch("http://localhost:3000/user_rooms",{
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        })
        const res = await req.json()

        if(res.error){
            alert(res.error)
        }else{
            setRooms(res)
        }
    }
    useEffect(() => {
        fetchRoom()
    }, [])
   
    return (
        <div>
            <button style={{ background: 'none', backgroundColor: 'lightgrey', height: '60px', width: '5%', border: 'none', padding: '5px' }} onClick={()=>{navigate('/home')}}>back</button>
            {rooms.map((room)=>{
                return (
                  <div>
                    <h1>{room.name}</h1>
                        <button style={{ background: 'none', backgroundColor: 'lightgrey', height: '60px', width: '10%', border: 'none', padding: '5px' }} onClick={()=>{
                        navigate(`/room/${room.id}`)
                    }}>Join Room</button>
                  </div>
                )
            })}

        </div>
    )
}

export default Chat