const Tree = require('../model/Tree');

exports.create = async (req, res, next) => {
	try {
        /** creating new node under its give parent, if no parent given 
            and is_root sets to true than it will be the root node
        */
        const node_object = new Tree(req.body);
        const node = await node_object.save();

        // update the height of parent if parent is available
        const parent = await Tree.findOne({'parent_id': req.body.parent_id}).exec();
            parent.height = parent.height + 1;    
            parent.save();

        return res.json({
            success: true,
            node: node,
        });
  	} 
  	catch (error) {
    	return res.json(error);
  	}	
};

exports.getNode = async (req, res, next) => {
	try {
        const node = await Tree.find({_id: req.query.id }).populate('parent_id');
        const children = await Tree.find({parent_id: req.query.id}).exec();
     
        return res.json({
            success: true,
            node,
            children
        });
    } 
  	catch (error) {
          console.log(error);
    	return error;
  	}	
};


exports.updateNode = async (req, res, next) => {
	try {
        // change the parent by another parent
        const node = await Tree.findOne({'_id': req.query.id}).exec();
        node.parent_id = req.body.parent_id;
        node.save();

        return res.json({
            success: true,
            message:'Parent has been Updated'
        });
    } 

  	catch (error) {
    	return error;
  	}	
};

exports.list = async (req, res, next) => {
	try {
        const all_nodes = await Tree.find().where({status: 1});
        return res.json({
            all_nodes
        });
  	} 

  	catch (error) {
    	return error;
  	}	
};


exports.deleteNode = async (req, res, next) => {
	try {
        const result = await Tree.deleteOne({id: req.query.id}).exec();
        res.json({
            deleted:result,
        });
    } 

  	catch (error) {
    	return error;
  	}	
};
