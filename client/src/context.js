import React, { useContext, useState, useEffect } from "react";

import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showSideBar, setShowSideBar] = useState(false);


  

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const exitChat = () => {
    socket.emit("disconnect");
    socket.off("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const messageData = {
      room,
      name,
      message,
      time: `${new Date(Date.now()).getHours()}:${new Date(
        Date.now()
      ).getMinutes()}`,
    };
    if (message) {
      await socket.emit("send_message", messageData);
      setMessages([...messages, messageData])
    }
    setMessage('')
  };

  

  useEffect(() => {
    console.log('just check')
      socket.on('recieved', data => {
        setMessages((messages) => {
            return [...messages, data]
        })
      })
  }, [])
  return (
    <AppContext.Provider
      value={{
        name,
        room,
        showSideBar,
        message,
        messages,
        socket,
        handleNameChange,
        handleRoomChange,
        toggleSideBar,
        exitChat,
        handleMessageChange,
        sendMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
