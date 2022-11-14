const Pet = require('../models/pet.model');


// edit all to be inline with exam model
// create
module.exports.createPet=(req,res)=>{
    Pet.create(req.body)
    .then(newPet=>res.json({pet:newPet}))
    .catch(err=>res.status(400).json(err))
}
// read
module.exports.getAllPets=(req,res)=>{
    Pet.find()
    .then(allPets => res.json({pets:allPets}))
    .catch(err=>res.json(err))
}
module.exports.getOnePet=(req,res)=>{
    Pet.findOne({_id:req.params.id})
    .then(onePet=>res.json({pet:onePet}))
    .catch(err=>res.json(err))
}

// update
module.exports.updatePet=(req,res)=>{
    Pet.findOneAndUpdate({_id:req.params.id},
        req.body,
        {new:true,runValidators:true})
    .then(updated=>res.json({Pet:updated}))
    .catch(err=>res.status(400).json(err))
}


// DESTROY
module.exports.deletePet =(req,res)=>{
    Pet.deleteOne({_id:req.params.id})
    .then(results => res.json({results:results}))
    .catch(err=>res.json(err))
    
}
