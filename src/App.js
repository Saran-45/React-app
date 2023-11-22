import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home.js';
import Signin from './Component/Signin.js';
// import Das from './Component/Das';
function App() {
  return (
    <div className="App">
    {/* <Signin></Signin> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      {/* <Route path='/das' element={<Das/>}></Route> */}
      <Route path='/login' element={<Signin/>}></Route>
    </Routes>
    </div>
  );
}
export default App;