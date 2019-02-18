const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TreeSchema = new Schema({
	node_name: {
		type: String,
		required: true,
	},
	parent_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tree',
	},
	is_root: {
		type: Boolean,
		required: true,
	},
	status:{
		type: Number,
    	default: 1,
	}

});

module.exports = Tree = mongoose.model('Tree', TreeSchema);