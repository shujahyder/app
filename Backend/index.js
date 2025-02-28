require("dotenv").config()
const express = require("express");
const connectMONGODB = require("./config/db")
const Comment = require("./models/Comment");
const app = express();
const router = require("./routes")
const cors = require("cors")

app.use(express.json())
app.use(cors())

const PORT = 3000;

connectMONGODB();

app.use("/api", router)

// app.get('/', async (req, res) => {

//     try {

//         const { name, city, uni } = req.query;
//         const comments = await Comment.find({
//             name: {
//                 $regex: name, $options: 'i'
//             }
//         }).limit(10)

//         console.log("req.query",req.query)
//         return res.status(200).json({ data: comments, message: 'OK!!!!!!!' });

//     } catch (error) {
//         return res.status(500).send("Server error",error.message)
//     }
// })

app.get('/:userId', async (req, res) => {

    try {

        // const { name} = req.params;

        console.log("req.params",req.params)
        return res.status(200).json({ data: [],message: 'OK!!!!!!!' });
        
    } catch (error) {
        return res.status(500).send("Server error",error.message)
    }
})

app.post('/', async (req, res) => {
    console.log("req.body", req.body)
    return res.status(200).json({ data: [], message: 'OK!!!!!!!' });
})
app.put('/:id', async (req, res) => {
    console.log("req.body", req.body)
    console.log("req.params", req.params)

    return res.status(200).json({ data: [], message: 'OK!!!!!!!' });
})

app.delete('/:id', async (req, res) => {
    console.log("req.params", req.params)

    return res.status(200).json({ data: [], message: 'OK!!!!!!!' });
})

app.listen(PORT,()=> {console.log("listening on port " +PORT)})

// module.exports = express