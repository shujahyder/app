
const Comment = require("../models/Comment")
const getComments = async (req, res) => {

    try {

        const { name, city, uni } = req.query;
        const comments = await Comment.find({
            name: {
                $regex: name, $options: 'i'
            }
        }).limit(10)

        // console.log("req.query", req.query)
        return res.status(200).json({ data: comments, message: 'OK!!!!!!!' });

    } catch (error) {
        return res.status(500).send("Server error", error.message)
    }
}

const getCommentById = async (req, res) => {

    try {

        const { id } = req.params;
        const comment = await Comment.findById(id)

        // console.log("req.query", req.query)
        return res.status(200).json({ data: comment, message: 'OK!!!!!!!' });

    } catch (error) {
        return res.status(500).send("Server error", error.message)
    }
}


module.exports = {
    getComments, getCommentById
}