import styled from "styled-components"
import { useAppContext } from "../context"
import Message from "./Message"

const ChatBoard = () =>{
    const {messages, name} = useAppContext()
 return <Wrapper>
     {messages?.map((message, i) => {
         return <section key ={i}><Message  sentMessage={message} name={name}/></section>
     })}
 </Wrapper>
}


const Wrapper = styled.div`
padding: 1rem;

margin-bottom: 4rem;

`
export default ChatBoard