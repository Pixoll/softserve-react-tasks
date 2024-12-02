import "./App.css";
import { useEffect, useState } from "react";

// Note: please, do not change the next things:
// - name of App prop,
// - placeholder and aria-label values
// - text on the button

function App({ ws }) {
    const [nickname, setNickname] = useState("");
    const [message, setMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);

    const handleNicknameChange = (event) => {
        setNickname(event.target.value)
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    };

    const handleSendMessage = () => {
        if (nickname && message) {
            const formattedMessage = `${nickname}: ${message}`;
            ws.send(formattedMessage);
            setMessage("");
        }
    };

    useEffect(() => {
        ws.onmessage = (event) => {
            setChatMessages((prevMessages) => [...prevMessages, event.data]);
        };

        return () => {
            ws.close?.();
        };
    }, [ws]);

    return (
        <div className="App">
            <h1>Web Sockets</h1>
            <div>
                <textarea
                    rows="30"
                    cols="60"
                    readOnly
                    aria-label="chat"
                    value={chatMessages.join("\n")}
                />
            </div>
            <input
                placeholder="Your nickname"
                size="11"
                value={nickname}
                onChange={handleNicknameChange}
            />
            <input
                placeholder="Type your message"
                size="40"
                value={message}
                onChange={handleMessageChange}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
}

export default App;
