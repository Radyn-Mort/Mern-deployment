const PetController = require('../controllers/pet.controller');
// edit controller methods

module.exports = app =>{
    app.get('/api/pet', PetController.getAllPets);
    app.get('/api/pet/:id', PetController.getOnePet);
    app.put('/api/pet/:id', PetController.updatePet);
    app.post('/api/pet', PetController.createPet);
    app.delete('/api/pet/:id', PetController.deletePet);
}