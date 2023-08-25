import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Error from './components/Error';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

function App() {

   const [characters, setCharacters]=useState([]);

   const onSearch=(id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data})=>{
         const alreadyExist=characters.find((char)=> char.name===data.name)

         if(data.name && !alreadyExist){setCharacters([...characters, data])}
         else if(alreadyExist){ window.alert("Está en pantalla ¿Eres ciego?") }
         else{ window.alert("No encontrado") }
      })
   }

   const onClose=(id)=>{
      const charFilt=characters.filter((char)=> char.id !== Number(id))
      setCharacters(charFilt)
   }

   const {pathname}=useLocation(); 

   const navigate=useNavigate();

   const [access, setAccess]=useState(false)
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'unaPassword';

   const login=(userData)=>{
      if(userData.email===EMAIL && userData.password===PASSWORD){
         setAccess(true);
         navigate("/home")
      }
   } //Luego creamos la función Log Out...

   useEffect(()=>{
      if(!access) navigate("/")
   }, [access])

   return (
      <div className='App'>
         {
            pathname !== "/" && <Nav onSearch={onSearch}/>
         }
         <Routes>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/:dir' element={<Error/>}/>
            <Route path='/' element={<Form login={login} />}/>
         </Routes>
      </div>
   );
}

export default App;



