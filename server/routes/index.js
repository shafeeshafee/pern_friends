const Router = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => {
  res.send("Home route.");
});

router.post("/friends", controllers.createFriend);

router.get("/friends", controllers.getFriends);
router.get("/friends/:id", controllers.getFriend);

router.put("/friends/:id", controllers.updateFriend);

router.delete("/friends/:id", controllers.deleteFriend);

module.exports = router;
