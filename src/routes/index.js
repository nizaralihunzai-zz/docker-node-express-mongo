const express = require('express');
const {getNode, updateNode, create, list, deleteNode} = require('../controllers/TreeController');
const router = express.Router();

/**
 * GET /status
 */
 router.get('/status', (req, res) => res.send('OK'));



/**
 * POST /create-node
 * Body params {node_name (name of the node), is_root (true/false), parent_id (if creating child, pass parent node id)}, 
 */
router.post('/create-node', create);


/**
 * GET /get-node?id="2344ip2o34if3"
 * query params, pass id in query param like this /get-node?id=3d32g3sdf24ds3  
 */

router.get('/get-node', getNode);


/**
 * PATCH /update-node?id=242423wf354dd
 * body params, pass new parent id in body {parent_id:"22dd324f345sfs"}  
 */

router.put('/update-node', updateNode);
router.delete('/delete-node', deleteNode);
router.get('/list-nodes', list);

module.exports = router;
