import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function Header({handleClick}) {
  const [count,setCount]=useState(0)
  const [name,setName]=useState("")
    // const [student, setStudent] = useState([]);
    // useEffect(()=>{
    // axios
    // .get("http://localhost:8080/employees")
    // .then((response)=>{
    //     console.log(response.data)
    //     setStudent(response?.data)
    //     console.log("hhhhh",student)

    // })
    // },[])
    // console.log("ooooo",student)
    const handleChange =(e) =>{
       setName(e.target.value)
       
    }
  
 
  return (
  
    <>
    <div>Header</div>
    <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {count}
        </a>
        {/* <input type="text" value={name} onChange={handleChange}></input> */}
        <button  onClick={e=>handleClick(20)}>Click on me </button>
    
  {/* {student.length != 0 ?(  <div>{student?.map( e =>
          <>
          <div>{ e.firstName }</div>
          <div>{ e.lastName }</div>
          </>
        )}
        </div>) :""} */}
    </>
  )
}
