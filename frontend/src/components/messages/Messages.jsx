import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const Messages = ({user,cable}) => {
    const [messages, setMessages] = useState([])
    const [chatbox, setChatBox] = useState("")
    const navigate = useNavigate()

    const handleMessage = async ()=>{
        const token = Cookies.get('token');
        
        const req = await fetch("http://localhost:3000/messages",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                room_id: window.location.href.match(/\d+$/)[0],
                sms: chatbox,
            })
        })
    }
    const getRoomData = async (uuid) =>{
        const req = await fetch(`http://localhost:3000/chat_messages?uuid=${window.location.href.match(/\d+$/)[0]}`)
        const res = await req.json()

        if(res.error){
            
        }else{
            setMessages(res)
        }
    }
    const updateApp = (result) => {
        if(result.error){
            // FAILED
        }else{
            // success

            setMessages((prev) => [...prev, result.message]);
        }
      };
    useEffect(() => {
        getRoomData()
        cable.room = cable.cable.subscriptions.create(
            {
              channel: "MessageChannel",
              room: window.location.href.match(/\d+$/)[0],
            },
            {
              received: (result) => {
              //   console.log("updatedRoom", result);
                updateApp(result);
              },
            }
          );
          
    }, [])
    
    return (
        <div >
            <button style={{ background: 'none', backgroundColor: 'lightgrey', height: '60px', width: '10%', border: 'none', padding: '5px' }} onClick={() => { navigate('/home') }}>back</button>
            <div className='Message-container'>
           {messages.map(sms=>{
            return(
                <div style={{backgroundColor: user.username === sms.username ? "#4287f5" : "#cad5e8",alignSelf: user.username === sms.username ? "flex-end" : "flex-start"}} className='Message'>
                    <p>{sms.sms}</p>
                </div>
            )
           })}

            </div>

           <input
           value={chatbox}
           onChange={(e)=> setChatBox(e.target.value)}
                style={{ background: 'none', height: '50px', width: '89%' , padding: '5px' }}
           />
            <button style={{ background: 'none', backgroundColor: 'silver', height: '60px', width: '10%', border: 'none', padding: '5px' }} onClick={handleMessage}>Send</button>
        </div>
    );
};

export default Messages;