import React,{useState,useReducer} from 'react'
import { useNavigate } from 'react-router-dom'
const Form = (props) => {
const {onSubmit,initialPet}=props
const [pet,setPet] = useReducer((pet,updates)=>({...pet,...updates}),
initialPet
)
const [errors,setErrors]=useState([]);
const navigate=useNavigate();
const handleChange=(key,val)=>{
    // console.log(pet)
    let copy = pet;
    copy[key]=val
    setPet({...copy})
}

return (
    <form onSubmit={(e)=>onSubmit(e,pet)} >
        
        <div className='row'>
        
        <div className="col">

                <div >
                    <label>Name:</label>
                    <input type='text' onChange={(e)=>handleChange('name',e.target.value)} value={pet.name} className='form-control'></input>
                </div>
                <div >
                    <label>Type:</label>
                    <input type='text' onChange={(e)=>handleChange('type',e.target.value)} value={pet.type} className='form-control'></input>
                </div>
                <div >
                    <label>Description:</label>
                    <input type='text' onChange={(e)=>handleChange('description',e.target.value)} value={pet.description} className='form-control'></input>
                </div>
        </div>
            <div className="col">
                <div>
                <label>Skill 1:</label>
                <input type='text' onChange={(e)=>handleChange('skill_1',e.target.value)} value={pet.skill_1} className='form-control'></input>
                </div>
            <div>
                <label>Skill 2:</label>
                <input type='text' onChange={(e)=>handleChange('skill_2',e.target.value)} value={pet.skill_2} className='form-control'></input>
            </div>
            <div>
                <label>Skill 3:</label>
                <input type='text' onChange={(e)=>handleChange('skill_3',e.target.value)} value={pet.skill_3} className='form-control'></input>
            </div>
        </div>
            </div>

        <button type='submit' className='btn btn-primary'>Submit</button>
        <button onClick={()=>navigate('/')} className='btn btn-danger'>cancel</button>
    </form>
)
}
// checked 
export default Form