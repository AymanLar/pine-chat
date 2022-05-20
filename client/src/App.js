import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Chat from './components/Chat';
import Join from './components/Join';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Join socket={socket}/>}/>
          <Route path='/chat' element={<Chat />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
