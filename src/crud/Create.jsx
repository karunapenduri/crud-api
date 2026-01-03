import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [id, setId]= useState("")
    const [name, setName]= useState("")
    const [place, setPlace]= useState("")
    const [phone, setPhone]= useState("")
    const [validate, setValidate] = useState(false)
    const navigate=useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        const studentdata={id,name, place, phone}
        console.log(studentdata)
        fetch("http://localhost:8000/students",{
            method:'POST',
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(studentdata)

            

        })
        .then((res)=>{
            alert("Students Data Saved Successfully")
            navigate("/")

        })
        .catch(err=>console.log(err.message))
        
    }
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
          
        <h2 style={{textAlign:"center"}}>Add New Student</h2> 
        <form onSubmit={handleSubmit}  >
            <label htmlFor="id"><b>ID:</b></label> <br />
            <input type="text" id="id" name="id" required value={id} onChange={e=>setId(e.target.value)} onMouseDown={()=>setValidate(true)}/><br />
            {id.length===0 && validate && <span style={{color:"red"}}>Please Enter Your ID</span>} <br />

             <label htmlFor="name"><b>Name:</b></label> <br />
            <input type="text" id="name" name="name" required value={name} onChange={e=>setName(e.target.value)} onMouseDown={()=>setValidate(true)}/><br />
            {name.length===0 && validate && <span style={{color:"red"}}>Please Enter Your Name</span>} <br />

             <label htmlFor="place"><b>Place:</b></label> <br />
            <input type="text" id="place" name="place" required value={place} onChange={e=>setPlace(e.target.value)} onMouseDown={()=>setValidate(true)} /><br />
             {place.length===0 &&  validate && <span style={{color:"red"}}>Please Enter Your Place</span>} <br />

             <label htmlFor="phone"><b>Phone:</b></label><br />
            <input type="text" id="phone" name="phone" required value={phone} onChange={e=>setPhone(e.target.value)} onMouseDown={()=>setValidate(true)} /> <br />
            {phone.length===0 && validate && <span style={{color:"red"}}>Please Enter Your Phone</span>} <br />

            <button className='btn btn-primary' style={{margin:"10px"}}>Save</button>
           <Link to="/" className="btn btn-danger">Back</Link>

        </form>
         
        </div>

    )
}

export default Create
