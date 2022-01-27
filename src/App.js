import { Route, Routes } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Home from '../src/pages/Home';
import Game from '../src/pages/Game';
import Order from './pages/Order';

function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/app/:title' element={ <Game/> }/>
          <Route path='/app/order' element={ <Order/>}/>
      </Routes>
    </div>
  );
}

export default App;
