import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Join = () => {
  // make use of the useState hook to get the input values from the form
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    //prevent the browser from automatic refreshing
    e.preventDefault();
    if(!userName || !room) return

    navigate(`/chat?user=${userName}&room=${room}`)

  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3>Join Pine-Chat</h3>
        <div className="form-row">
          <label htmlFor="userName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            name="userName"
            className="form-input"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
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
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          join chat
        </button>
      </form>
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
