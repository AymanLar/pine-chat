import { FaTimes } from "react-icons/fa"
import styled from "styled-components"

const SmallSideBar = ({showSideBar, toggleSideBar}) => {
    return <Wrapper>
        <div className={`${showSideBar ? "sidebar-container show-sidebar" : "sidebar-container"}`}>
            <div className="content">
                <button className="close-btn" onClick={toggleSideBar}>
                    <FaTimes />
                </button>
            </div>
        </div>
    </Wrapper>
}


const Wrapper = styled.aside`
@media (min-width: 992px){
    display: none;
}

.sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    transition: 0.3s all ease-in-out;
    opacity: 0;
}
.show-sidebar{
    opacity: 1;
    z-index: 99;
}
.content {
    background: #fff;
    width: 90vw;
    height: 95vh;
    border-radius: 4px;
    display: flex;
    align-items: center;
    position: relative;
}
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    font-size: 1.75rem;
    color: lightcoral;
}
`
export default SmallSideBar