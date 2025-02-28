const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signup = async (req, res) => {
    try {
        const { name, password, email } = req.body;

        if (!name || !password || !email) {
            throw new Error("All fields are required")
        }

        const user = await User.findOne({ email })
        if (user) {
            throw new Error("User already exists")
        }

         const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({ name, email, password: hashPassword })

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1hr' })

        return res.json({data:{user:newUser,token},message:"Signup successful!"})

    } catch (error) {
        console.log("error: ", error)
        return res.json({message:"Server error:" + error.message})
    }
}

const login = async (req, res) => {

    try {
    const { email, password } = req.body;

    if (!password || !email) {
        throw new Error("All fields are required")
    }

    const user = await User.findOne({ email })
    if (!user) {
        throw new Error("Invalid credentials")
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error("Invalid credentials")
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1hr' })

    return res.json({ data: { user, token }, message: "Login successful!" })
    
    } catch (error) {
        return res.status(500).json({ message: "Server error:" + error.message })
    }
}

module.exports = {
    signup,login
}