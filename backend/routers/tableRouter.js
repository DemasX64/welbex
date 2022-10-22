const Router = require('express');
const router = Router();
const tableController = require('../Controllers/tableController');

router.get('/get', tableController.getTable);

module.exports = router;