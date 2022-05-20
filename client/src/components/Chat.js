import { useState } from "react";
import styled from "styled-components";
import ChatBoard from "./ChatBoard";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SmallSideBar from "./SmallSideBar";

const Chat = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  // a function that will toggle the state of the showsidebar

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <Wrapper>
      <main className="chat-dashboard">
        <SideBar />
        <SmallSideBar showSideBar={showSideBar} toggleSideBar={toggleSideBar}/>
        <div className="chat-page">
          <NavBar toggleSideBar={toggleSideBar} />
          <ChatBoard />
          <Footer />
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .chat-dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .chat-page {
    min-height: 100vh;
    background: #fff;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  @media (min-width: 992px) {
    .chat-dashboard {
      grid-template-columns: auto 1fr;
    }
    .chat-page {
      grid-template-rows: 1fr auto;
    }
  }
`;
export default Chat;
