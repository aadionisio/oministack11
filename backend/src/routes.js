const { Router } = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const router = Router();

router.post("/sessions", SessionController.create);

router.get("/ongs", OngController.index);

router.post("/ongs", OngController.create);

router.get("/profile", ProfileController.index);

router.get("/incidents", IncidentController.index);
router.post("/incidents", IncidentController.create);
router.delete("/incidents", IncidentController.delete);
module.exports = router;
