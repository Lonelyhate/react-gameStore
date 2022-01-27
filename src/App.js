import { Route, Routes } from 'react-router-dom'
import Header from '../src/components/Header/Header'
import Home from '../src/pages/Home';


function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
