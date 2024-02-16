const userModel=require("../models/contractor")
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
const SECRET_KEY="DKJFHJDFKGHDFKJHSKDHFKJSFJK"

const signup = async (req, res) => {
    // existing user check
    // hashed Password
    // User creation
    // Token Generate
    const { firstname,lastname, number, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ number: number });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        const result = await userModel.create({
            number: number,
            password: hashPassword,
            firstname: firstname,
            lastname: lastname

        });

        const token = jwt.sign(
            { number: result.number, id: result._id },
            SECRET_KEY
        );

        res.status(201).json({ user: result, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went wrong" });
    }
};
const signin = async (req, res) => {
    const { number, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ number: number });
        if (!existingUser) {
            return res.status(404).json({ message: "User Not Found" });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign(
            { number: existingUser.number, id: existingUser._id },
            SECRET_KEY
        );

        res.status(201).json({ user: existingUser, token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went wrong" });
    }
};


module.exports={signin,signup}

