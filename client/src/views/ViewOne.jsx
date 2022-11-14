import React,{useEffect,useState} from 'react'

import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
const ViewOne = () => {
const {id}=useParams();
const [pet,setPet]=useState();
const [loaded,setLoaded]=useState(false);
const [likes,setLikes]=useState(0);
const [liked,SetLiked]=useState(false)
const navigate = useNavigate();
const like=()=>{
setLikes(likes+1)
SetLiked(!liked)
setLoaded(!loaded)
}
const adopt=(id)=>{
  axios.delete('http://localhost:8000/api/pet/'+id)
  .then(res=>{console.log(res);navigate('/')})
  .catch(err=>{console.log(err)})
}
  useEffect((id)=>{
    axios.get('http://localhost:8000/api/pet/'+id)
    .then(res=>{setPet(res.data.pet);setLoaded(true)})
    .catch(err=>console.log(err))
    },[loaded])
  
if(loaded){
  return (
    <div className='container'>
      <div className="row">
        <h2 className="col">Details about {pet.name}</h2>
        <button onClick={()=>adopt(pet._id)} className='btn btn-danger btn-sm w-25'>Adopt!</button>
      </div>
      <div className='container border'>
      <h3>Name: {pet.name}</h3>
      <h4>Type: {pet.type}</h4>
      <h4>Description: {pet.description}</h4>
      <h4>Skills: {pet.skill_1}, {pet.skill_2}, {pet.skill_3} </h4>

      <div className="row">
      <button onClick={()=>like()} disabled={liked} className='btn btn-success btn-sm w-25'>Like</button>
      <p className='col'>like(s) {likes}</p>
      </div>

      </div>

    </div>
  )
}}

export default ViewOne