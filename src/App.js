import './App.css';
import Create from './components/Create';
import Delete from './components/Delete';
import Edit from './components/Edit';
import Read from './components/Read';
import Login from './components/login';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      
      <Routes>
      <Route path='/' element={<Read/>}></Route>
      <Route path='/login' element={<Login/>}></Route>

      <Route path='/create' element={<Create/>}></Route>
      <Route path='/Edit' element={<Edit/>}></Route>
      <Route path='/delete' element={<Delete/>}></Route>




      </Routes>
      
    </div>
  );
}

export default App;
