
import Home from '../src/Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header/Header'
import Footer from '../src/Components/Header/Footer'
import Others from './Components/Home/Others';
function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/contact' element={<Others/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
