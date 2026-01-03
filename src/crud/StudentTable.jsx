import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function StudentTable() {
  console.log(useState(1))
  const [students, setStudents]= useState([])
  const navigate =useNavigate();
  const Displaydetails = (id)=>{
    // console.log(id)
       navigate("/view/"+id)
  }
  const EditDetails = (id)=>{
    navigate("edit/"+id)

  }
  const RemoveDetails = (id)=>{
    if(window.confirm("Are you sure you want to delete")){
      fetch("http://localhost:8000/students/"+id ,{
            method:'DELETE',

        })
        .then((res)=>{
            alert("Students Data Removed Successfully")
            window.location.reload()

        })
        .catch(err=>console.log(err.message))
    }
  }
  useEffect(()=>{
    fetch('http://localhost:8000/students')
    .then(res=>res.json())
    .then((data)=>{
      setStudents(data)
      
    })
    .catch((err)=>{
      
      console.log(err.message)
    })

  },[])
    return (
        <div className='container '>

          <h2>Student Records</h2>

          <div className='table-container'>
            <Link to="/create" className='btn btn-success'>Add New Student</Link>

            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Place</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                 students && students.map((item,index)=>(

                  <tr key={item.id}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.place}</td>
                  <td>{item.phone}</td>
                  <td>
                    <button onClick={()=>Displaydetails(item.id)} className='btn btn-info' style={{marginRight:"10px"}}>View</button>
                    <button  onClick={()=>EditDetails(item.id)} className='btn btn-secondary' style={{marginRight:"10px"}}>Edit</button>
                    <button onClick={()=>RemoveDetails(item.id)} className='btn btn-danger' style={{marginRight:"10px"}}>Delete</button>
                  </td>
                </tr>

                  ))
                  }
              </tbody>
            </table>
          </div>
           

            
        </div>
    )
}

export default StudentTable