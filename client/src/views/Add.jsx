import React from 'react'
import Form from '../components/Form'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import { useState } from 'react'
const Add = () => {
let initialPet={
    
        name:'',
        type:'',
        description:'',
        skill_1:'',
        skill_2:'',
        skill_3:''

    
}
const [errors,setErrors]=useState([]);
const navigate= useNavigate();
    const createPet=(e,pet)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet',pet)
        .then(res=>{console.log(res);navigate('/')})
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
                }

                setErrors(errorArr);
            })  
    }
return (
    
    <div>
        
        <div className='row'>
            <h2 className='col'>Know  pet needing a home?</h2>
            {/* <Link to={'/'} className='col'>Home</Link> */}
        </div>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <Form onSubmit={createPet} initialPet={initialPet}/>
    </div>
)
}

export default Add