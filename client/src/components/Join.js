import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context";

const Join = () => {
  const navigate = useNavigate();
  const { name, room, handleNameChange, handleRoomChange, socket } =
    useAppContext();

  const joinChat = (e) => {
    if (!name || !room) return;
    socket.emit("join_chat", room);
    navigate("/chat");
  };
  return (
    <Wrapper>
      <div className="form">
        <h3>Join Pine-Chat</h3>
        <div className="form-row">
          <label htmlFor="userName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            name="userName"
            className="form-input"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className="form-row">
          <label htmlFor="room" className="form-label">
            Chat Room
          </label>
          <input
            type="text"
            name="room"
            className="form-input"
            value={room}
            onChange={handleRoomChange}
          />
        </div>

        <button className="btn btn-block" onClick={joinChat}>
          join chat
        </button>
      </div>
    </Wrapper>
  );
};
//make use of styled component to add css to each page without worry of name conflict
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  h3 {
    font-size: 1.75rem;
    text-align: center;
  }
  .form {
    margin: 0 auto;
    width: 90vw;
    max-width: 400px;
    background: white;
    padding: 1.5rem 2.5rem;
    border-radius: 4px;
    border-top: 5px solid blueviolet;
    transition: 0.3s all ease-in-out;
  }
`;

export default Join;
