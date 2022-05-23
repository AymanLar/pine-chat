import styled from "styled-components";
import { MdSend } from "react-icons/md";
import { useAppContext } from "../context";

const Footer = () => {
  const { handleMessageChange, message, sendMessage } = useAppContext()
  return (
    <Wrapper>
      <form className="form-row" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Enter your chat "
          className="form-input"
          onChange={handleMessageChange}
          value={message}
          
        />
        <button className="send-btn" onClick={sendMessage}>
          <MdSend />
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  height: 5rem;
  background: #fff;
  border-top: 1px solid #f0f4f8;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  .form-row {
    background: #fff;
    display: flex;
    padding: 0.1rem 0.5rem;
    border-radius: 10px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  }

  .form-input {
    border-color: transparent;
    background: transparent;
  }
  .form-input:focus {
    outline: none;
  }
  .send-btn {
    padding: 0;
    background: transparent;
    color: blueviolet;
    border-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      padding: 0;
      font-size: 2.25rem;
    }
  }
  @media (min-width: 992px) {
    position: sticky;
    .form-row {
      margin: 0 auto;
    }
  }
`;
export default Footer;
