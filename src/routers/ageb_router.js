const controllerAgeb =  require("../controller/ageb_controller")
const { Router } = require("express");
const router = Router();

router.get('/agebs_cp',controllerAgeb.agebs_cp)

router.get('/polygons_ageb',controllerAgeb.polygons_ageb)

router.get('/markers_cp',controllerAgeb.markers_cp)

module.exports = router;