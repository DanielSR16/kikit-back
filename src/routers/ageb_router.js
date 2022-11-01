const controllerAgeb =  require("../controller/ageb_controller")
const { Router } = require("express");
const router = Router();

router.post('/agebs_cp',controllerAgeb.agebs_cp)

router.post('/polygons_ageb',controllerAgeb.polygons_ageb)

router.post('/markers_cp',controllerAgeb.markers_cp)



module.exports = router;