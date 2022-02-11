const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const scoreController = require("../controllers/score-controller");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");

router.post(
  "/registration",
  body("username").isLength({ min: 3 }),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);

router.post("/score", scoreController.createNew);
router.get("/score/all", scoreController.getAll);
router.get("/score/:userId", scoreController.getByUser);
router.put("/score/:userId", scoreController.updateByUser);
router.delete("/score/remove-id", scoreController.removeById);
router.delete("/score/remove-user", scoreController.removeByUser);

module.exports = router;
