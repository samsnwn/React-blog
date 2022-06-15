import './App.css';
import Form from './components/Form';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import ShowAllPosts from './components/ShowAllPosts';
import Navbar from './components/Navbar';
import React, {useState} from 'react'



function App() {

  const [userInput, setUserInput] = useState({
    name:'',
    title: '',
    content: '',
    edit: false    
})

  const [list, setList] = useState([])


    const deleteHandler = (index) => {
        const newList = list.filter((el, i) => i !== index)
        setList(newList)
    }

    // const editHandler = (e, index) => {
    //   const newList = list.map((el, i) => {
    //     if(index === i) {
    //       if(el.edit) {
    //         return ({...el, edit: !el.edit, [e.target.name] : e.target.previousElementSibling.value })
    //       }
    //       return {...el, edit: !el.edit}
    //     } else {
    //       return el
    //     }
    //   })
    //   setList(newList)
    // }


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Form setList={setList} userInput={userInput} setUserInput={setUserInput}/>}/>
        <Route path="/show" element={<ShowAllPosts data={list} deleteHandler={deleteHandler} />}/> 
      </Routes>
    </div>
  );
}

export default App;
