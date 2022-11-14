const mongoose = require('mongoose');

	const PetSchema = new mongoose.Schema({
    name: {type :String,required:[true,'name is required'],minLength:[3,'Min length for name is 3']},
    type: {type:String,required:[true,'pet type is required'],minLength:[3,'Min length for type is 3']},
    description:{type:String,required:[true,'description is required'],minLength:[3,'Min length for Description is 3']},
    skill_1:{type:String},
    skill_2:{type:String},
    skill_3:{type:String}
	});

	const Pet = mongoose.model('Pet', PetSchema);

	module.exports = Pet;
