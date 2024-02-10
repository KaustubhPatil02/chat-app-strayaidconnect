"use client";
import { useEffect, useState } from 'react';

function ChatroomList() {
  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    fetch('/api/chatrooms')
      .then(response => response.json())
      .then(data => setChatrooms(data));
  }, []);

return (
    <div>
        <h2 className='text-center'>Chatrooms</h2>
        {chatrooms.map((chatroom: any) => (
            <div key={chatroom.id}>
                <h2>{chatroom.name}</h2>
                {/* Display other chatroom data here */}
            </div>
        ))}
    </div>
);
}

export default ChatroomList;