import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function View() {
    console.log(useParams())
    const {studentid} = useParams();
    const [studentdata, setStudentdata]=useState({})
    useEffect(()=>{
        fetch("http://localhost:8000/students/"+studentid)
         .then((res)=>res.json())
         .then((data)=>setStudentdata(data))
         .catch((err)=>console.log(err.message))


    },[studentid])
   
    
    return (
        <div>
       <h2>Student Details</h2>
       {
         studentdata && <div className="border border-primary " style={{width:"150px", height:"150px"}}>
        <p><strong>ID:</strong>{studentdata.id}</p>
        <p><strong>Name:</strong>{studentdata.name}</p>
        <p><strong>Place:</strong>{studentdata.place}</p>
        <p><strong>Phone:</strong>{studentdata.phone}</p>
        <Link to="/" className='btn btn-success'>Back</Link>
       </div>
       }
       </div> 
    )
    
}

export default View
