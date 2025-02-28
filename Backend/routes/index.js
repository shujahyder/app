const express = require('express');
const commentRouter = require("./comments.routes")
const authRouter = require("./auth.routes")

const router = express.Router();

router.use("/comments", commentRouter);
router.use("/auth", authRouter);

module.exports = router;

