import React from 'react'
import Form from '../components/Form'
import axios from 'axios'
import { useParams,useNavigate,Link } from "react-router-dom";
import { useEffect,useState } from 'react';
const Edit = () => {
    const [initialPet,setInitialPet]=useState();
    const [loaded,setLoaded]=useState(false);
    const navigate=useNavigate();
    const {id}=useParams();
    const [errors,setErrors]=useState([]);

    useEffect(()=>{
    axios.get('http://localhost:8000/api/pet/'+id)
    .then(res=>{setInitialPet(res.data.pet);setLoaded(true);console.log(res.data.pet)})
    .catch(err=>console.log(err))
    },[loaded])

    const updatePet=(e,author)=>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/'+id,author)
        .then(res=>{console.log(res);navigate('/')})
        .catch(err=>{
            console.log(err);
            const errorResponse = err.response.data.errors;
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
                }
                
                setErrors(errorArr);
                console.log(errorArr);
                setLoaded(false);
            })  
    }
if(loaded){
return (
    <div>
        <div className="row">
            <h2 className="col">Edit {initialPet.name}</h2>
            {/* <Link to={'/'} className='col'>Home</Link> */}

        </div>
        <Form onSubmit={updatePet} initialPet={initialPet}/>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
    </div>
)
}}

export default Edit