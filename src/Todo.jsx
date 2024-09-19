import React, { useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [text, setText] = useState("")
    const [Todo, setTodo] = useState([])
    const [dept, setDept] = useState([])
    const [rate, setRate] = useState([])


    const handelchange = (event) => {
     const{name,value}=event.target
        if(name==="name"){
            setText(value)
        }
        else if(name==="department"){
            setDept(value)
        }
        else{
            setRate(value)
        }
    }
    // const handeldept = (event) => {
    //     setDept(event.target.value)
    // }
    // const handelrate = (event) => {
    //     setRate(event.target.value)
    // }
    const handelclick = () => {
    const obj={
    text: text,
    dept: dept,
    rate: rate,
    }
        setTodo([...Todo, obj])
        setText("")
        setDept("")
        setRate("")
    }

    return (
        <>

            <h1>EMPLOYEE FEEDBACK FORM</h1>

            <div className="main-box">
                <div className="box">
                    <p>Name:</p>
                    <input className='border' name="name" type='text' value={text} onChange={(handelchange)} /></div>
                <div className="box">
                    <p>Department:</p>

                    <input className='border' name="department"type='text' value={dept} onChange={(handelchange)} /></div>
                <div className="box">
                    <p>Rating:</p>
                    <input className='border' name="rate" type='number' value={rate} onChange={(handelchange)} /></div>

                <button className='button' onClick={(handelclick)}><p>Submit</p></button>
            </div>

            <ul >
                <div className='content'> {Todo.map((item, index) => (
                     <li key={index}>{item.text}  ;  {item.dept}  ;  {item.rate}</li>
                    
                ))
                }</div>
            </ul>

        </>
    )
}

export default Todo

