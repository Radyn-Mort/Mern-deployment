import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
const ViewAll = () => {
  const [list,setList]=useState();
  const [loaded,setLoaded]=useState(false)


  useEffect(()=>{
    axios.get('http://localhost:8000/api/pet')
    .then(res=>{setList(res.data.pets);
      setLoaded(true);})
    .catch(err=>console.log(err))

  },[loaded])

if(loaded){
  return (
    <div>
      <div className='row'>
        <h2 className='col'>These pets need a good Home</h2>
        <Link to={'/add'} className='col'>Add a pet to the shelter</Link>
      </div>
      <table className='table table-striped table-dark'>
        <thead>

        <tr className=''>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>actions</th>
        </tr>
        </thead>
        <tbody>

        {(list.map((pet,i)=>
        <tr key={i}>
          <td>{pet.name}</td>
          <td>{pet.type}</td>
          <td>{pet.description}</td>
          <td><Link to={'/edit/'+pet._id}> Edit </Link> <Link to={'/view/'+pet._id}>View </Link></td>
        </tr>
      ))}
      
        </tbody>
        
      </table>

    </div>
  )
}}

export default ViewAll