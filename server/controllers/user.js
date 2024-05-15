import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

import users from '../models/users.js'

export const updateUser = async (req, res) => {
    const { id: _id } = req.params;
    const { name, email, password } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ error: 'Invalid user id' });
    }

    try {
        const user = await users.findOne({ _id, deleted: 0 });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const updatedUser = await users.findByIdAndUpdate(_id, {
            $set:
            {
                'name': name,
                'email': email,
                'password': hashedPassword,
                'updated_on': Date.now()
            },
            $inc: {
                '__v': 1
            }
        }, { new: true })
        return res.status(200).json({ data: updatedUser, message: 'User updated successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

export const deleteUser = async (req, res) => {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).json({ error: 'Invalid id' });
    }

    try {
        const user = await users.findOne({ _id, deleted: 0 });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const updatedUser = await users.findByIdAndUpdate(_id, {
            $set:
            {
                'deleted': 1
            },
            $inc: {
                '__v': 1
            }
        }, { new: true })
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}