const express = require('express');
const router = express.Router();

const { getComments, getCommentById } = require("../controller/comments.controller")

router.get('/', getComments)
router.get('/:id', getCommentById)

module.exports = router;