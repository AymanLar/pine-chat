import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Chat from './components/Chat';
import Join from './components/Join';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Join />}/>
          <Route path='/chat' element={<Chat />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
