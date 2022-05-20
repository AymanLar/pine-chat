import styled from "styled-components"
import {FaAlignLeft} from 'react-icons/fa'
import { Link } from "react-router-dom"


const NavBar = ({toggleSideBar}) => {
    
    return <Wrapper>
        <div className="nav-center">
            <button className="toggle-btn" onClick={toggleSideBar}>
                <FaAlignLeft />
            </button>
            <div>
                <h3>pine chat</h3>
            </div>
            <Link to="/" className="btn leaveChat-btn">Exit Chat</Link>
        </div>
    </Wrapper>
}


const Wrapper = styled.nav`
height: 6rem;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
background: #1F2937;

a {
    text-decoration: none;
    
}
.nav-center {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
h3{
    color: #fff;
    margin: 0;
    font-size: 1.5rem;
}
.toggle-btn {
    background: transparent;
    border-color: transparent;
    color: #fff;
    font-size: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.leaveChat-btn {
    background: #fff;
    color: blueviolet;
}
@media (min-width: 992px){
    display: none;
}
`

export default NavBar