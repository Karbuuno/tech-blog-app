const router = require("express").Router();
const loginRoute = require("./loginRoute");
const logoutRoute = require("./logoutRoute");
const postRoute = require("./postRoute");
const signupRoute = require("./signupRoute");
const commentRoute = require("./commentRoute");

router.use("/login", loginRoute);
router.use("/logout", logoutRoute);
router.use("/post", postRoute);
router.use("/signup", signupRoute);
router.use("/comment", commentRoute);

module.exports = router;
