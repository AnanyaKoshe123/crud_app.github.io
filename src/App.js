"use client"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Create from './component/Create';
import Read from './component/Read';
import Edit from './component/Edit';



function App() {
//   const[email,setEmail]=useState('');
//   const[password,setPassword]=useState('');

//   const handleEmail =(e)=>{
//  setEmail(e.target.value);
// //  console.log(e);
//   }
//   const handlePassword =(e)=>{
//     setPassword(e.target.value);
//    //  console.log(e);
//      }
//      const handleApi=()=>{
//       console.log({email,password})
//       axios.post('https://reqres.in/api/login'
// ,{
//   email :email,
//   password:password
// }).then(result=>{
//   alert("Successfull login");
//   console.log(result)
// }).catch(error=>{
//   console.log(error)
// })
//      }
  return (
   <div className="App">
  {/* //  Email:<input value={email} onChange={handleEmail} type="email" /><br/><br/>
  //  password:<input value={password} onChange={handlePassword}type="password"/><br/>
  //  <button onClick={handleApi}>Login</button> */}
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Read/>}/>
        <Route exact path="/Create" element={<Create/>}/>
        <Route exact path="/read" element={<Read/>}/>
        <Route exact path="/edit" element={<Edit/>}/>
        </Routes>
    </BrowserRouter>
    </div>


  );
}

export default App;
