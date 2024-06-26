import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/users.js'

export const signup = async(req,res) => {
    const { firstname, lastname, email, password } = req.body;
    
    try{
        const existinguser = await users.findOne({ email, deleted: 0 });
        if(existinguser){
            return res.status(404).json({ message: 'User already exist'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await users.create({ firstname, lastname, email, password: hashedPassword })
        const token = jwt.sign({ id:newUser._id }, process.env.JWT_SECRET, {expiresIn: '1h'});
        return res.status(200).json({
            token,
            user: newUser,
            message: 'User created successfully'
        });
    }catch(error){
        return res.status(500).json({ error: 'Internal server error'});
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email, deleted: 0 });
        if(!existinguser){
            return res.status(404).json({ error: 'Invalid email or password' })
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({error : 'Invalid email or password' })
        }
        const token = jwt.sign({ email: existinguser.email, id:existinguser._id}, process.env.JWT_SECRET, { expiresIn: '1h'});
        return res.status(200).json({ 
            token,
            user: existinguser,
            message: 'User login successfully'
        })
    } catch (error)  {
        return res.status(500).json({ error: 'Internal server error'})
    }
}