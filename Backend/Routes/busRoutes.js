const express = require("express");
const router = express.Router();
const  {
    addnewBus,
    getBusbyid,
    searchBus,
    deleteBusbyid,
    updateBus,
}= require ('../controllers/bus.controller')

router.post('/addnewBus', addnewBus);
router.put('/updateBus', updateBus);
router.get('/getBusbyid', getBusbyid);
router.get('/searchBus', searchBus);
router.delete('/deleteBusbyid', deleteBusbyid);

module.exports = router;