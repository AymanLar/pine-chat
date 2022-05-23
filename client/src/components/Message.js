import styled from "styled-components";

const Message = ({ sentMessage, name }) => {
  let isSentByCurrentUser = false;
  if (sentMessage.name === name) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <Wrapper>
      <div className="message-container justifyEnd">
        <div className="message-box current-user">
          <p className="message-text color-white">{sentMessage.message}</p>
        </div>
        <p className="sent-text">
        <span>{sentMessage.name}</span>
          <span>{sentMessage.time}</span>
        </p>
      </div>
    </Wrapper>
  ) : (
    <Wrapper>
      <div className="message-container justifyStart">
        <div className="message-box other-user">
          <p className="message-text color-dark">{sentMessage.message}</p>
        </div>
        <p className="sent-text">
          <span>{sentMessage.name}</span>
          <span>{sentMessage.time}</span>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .message-box {
    background: #f3f3f3;
    border-radius: 10px;
    padding: 0.25rem 1.25rem;
    color: #fff;
    max-width: 70vw;
  }
  .message-text {
    width: 100%;
    letter-spacing: 0;
    float: left;
    font-size: 1.1rem;
    word-wrap: break-word;
  }
  .message-text img {
    vertical-align: middle;
  }

  .message-container {
    display: flex;
    justify-content: flex-end;
    padding: 0 0.25rem;
    margin-top: 5px;
  }
  .sent-text {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0 .25rem;
   span{
       padding: 0;
       margin: 0;
   }
  }
  
  .justifyEnd {
    justify-self: flex-end;
  }

  .justifyStart {
    justify-content: flex-start;
  }

  .color-white {
    color: #fff;
  }
  .color-dark {
    color: #353535;
  }
  .current-user {
    background: blueviolet;
  }
  .other-user {
    background: #f3f3f3;
  }

`;

export default Message;
