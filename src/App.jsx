import './index.css';
import { Route,Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Layout from './components/Layout';
import Login from './components/AuthUsers/Login';
import Register from './components/AuthUsers/Register';
import Notfound from './components/errors/Notfound';
import Wtch from './components/watchLists/watchlist';
import TVmazeMovies from './components/fetchAPI/fetchapi';
import Details from './components/Details';
import Ignore from './components/errors/Ignore';



function App(){
  


  return(
  <>
  <Routes>
      <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Main/>}/>
    <Route path="login" element={<Login/>}></Route>
    <Route path="register" element={<Register/>}></Route>
    <Route path='shows' element={<TVmazeMovies/>}></Route>
    <Route path='/yourList' element={<Wtch/>}></Route>
    <Route path='/details/:id' element={<Details/>}></Route>
    <Route path="/ignore/:id" element={<Ignore/>} />
    <Route path="*" element={<Notfound/>}></Route>
    </Route>
  </Routes>
   
   
  </>
  )
}

export default App;

