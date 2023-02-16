import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
const Messages = () => {
    const [sms, setSms] = useState([]);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:3000/cable');
        ws.onopen = () => {
            console.log('Websockets connected!');
            ws.send(
                JSON.stringify({
                    command: 'subscribe',
                    identifier: JSON.stringify({ channel: 'MessageChannel' }),
                })
            );
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (
                data.type === 'ping' ||
                data.type === 'welcome' ||
                data.type === 'confirm_subscription'
            ) {
                return;
            }

            const smsData = JSON.parse(data.message.sms);
            setSms((prevSms) => [smsData, ...prevSms]);
        };

        return () => {
            ws.close();
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const req = await fetch('http://localhost:3000/messages', {
            method: 'POST',
            headers: {
                'Authorization': Cookies.get('token'),
                'Content-Type': 'application/json' },
            body: JSON.stringify({ content: e.target.content.value }),
        });

        e.target.content.value = '';
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="content"
                    placeholder="All you have to do is ..."
                    cols="30"
                    rows="10"
                />
                <button type="submit">Send Message</button>
            </form>
            {sms.map((message) => (
                <div key={message.id}>
                    <p>{message.content}</p>
                    <p>{message.created_at}</p>
                </div>
            ))}
        </div>
    );
};

export default Messages;
