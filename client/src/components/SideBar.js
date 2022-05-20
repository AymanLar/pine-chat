import styled from "styled-components";

const SideBar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container">
        <div className="content">
          <header>
            <h1>Pine Chat</h1>
          </header>
          <div className="online-user"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
  }

  .sidebar-container {
    min-height: 100vh;
    height: 100%;
    width: 300px;
    background: #1F2937;
  }
  .content {
    position: sticky;
    top: 0;
  }
  header{
    height: 8rem;
    display: flex;
    color: #fff;
    align-items: center;
    margin-left: 3rem;
  }
`;

export default SideBar;
