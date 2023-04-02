const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get('/secret/view', (req,res)=>{res.render('index.ejs')});
router.get("/secret/add/:key", controller.main.add);
router.get("/secret/read/", controller.main.read);
router.post("/secret/delete/", controller.main.delete); //--id
router.post("/secret/finish/", controller.main.finish); //--id

module.exports = router;
