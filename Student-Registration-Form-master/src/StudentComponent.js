import React,{useState} from 'react'
import "./StudentComponent.css"
import axios from 'axios'
export default function StudentComponent() {

    const[user,setUser]= useState({
        
        fisrtName:"",
        lastName:"",
        id:"",
        department:"",
        number:"",
        
    })

    const handleChange = e => {
        // console.log(e.target);
          const {name, value}=e.target
          setUser({
            ...user,
            [name]:value
          })
    }
    const register =() =>{
        const {firstName, lastName,id, department,number }= user
        if(firstName && lastName && id && department && number){
          // alert("posted")
          axios.post("http://localhost:9002/register", user)
          .then(res=>alert("Register successfully"))
        }
        else {
          alert("invaid input ")
        }
        
      }


  return (
    <div className='form'>
      <h1>login</h1>
      <input type="text" name='firstName' value={user.fistName}placeholder='Enter stundet first name'  onChange={handleChange}/>
      <input type="text" name='lastName' value={user.lastName}placeholder='Enter stundet last name'  onChange={handleChange}/>
      <input type="text" name='id' value={user.id}placeholder='Enter stundet enrollment number'  onChange={handleChange}/>
      <input type="text" name='department' value={user.department} placeholder='Enter stundet department name'  onChange={handleChange}/>

      <input type="tel" maxLength={"10"} required name='number' value={user.number}  placeholder='Enter student phone number' onChange={handleChange}/>
      <div className="button" onClick={register }>register</div>

      

          </div>
  )
}
