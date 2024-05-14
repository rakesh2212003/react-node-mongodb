import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/users.js'

export const signup = async(req,res) => {
    const { name, email, password } = req.body;
    try{
        const existinguser = await users.findOne({ email, deleted: 0 });
        if(existinguser){
            return res.status(404).json({ message: 'User already exist'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await users.create({ name, email, password: hashedPassword })
        const token = jwt.sign({ email: newUser.email, id:newUser._id }, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({ data: newUser, token, message: 'User created successfully' });
    }catch(error){
        return res.status(500).json({ message: 'Internal server error'});
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email, deleted: 0 });
        if(!existinguser){
            return res.status(404).json({ message: 'User not Exist' })
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message : "Invalid credentials"})
        }
        const token = jwt.sign({ email: existinguser.email, id:existinguser._id}, process.env.JWT_SECRET, { expiresIn: '1h'});
        return res.status(200).json({ data: existinguser, token, message: 'User login successfully' })
    } catch (error)  {
        return res.status(500).json({ message: 'Internal server error'})
    }
}