const express = require('express');
const asyncHandler = require('express-async-handler');
const User = require('../model/user');
// const user = require('../models/user');
 
const app = express();
const userRoute = express.Router();
 
userRoute.get("/", asyncHandler(
    async (req, res) => {
        const user = await User.find({})
        res.status(200).json(user);
    }
));
 
userRoute.get("/:id", asyncHandler(
    async (req, res) => {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(404);
            throw new Error("Employee not found");
        }
        res.status(200).json(user);
    }
));
 
userRoute.post("/", asyncHandler(
    async (req, res) => {
        const { firstname, lastname, age } = req.body;
        if (!firstname || !lastname || !age) {
            res.status(400);
            throw new Error('Enter all details');
        }
        const user = await User.create({
            firstname, lastname, age
        });
        res.status(201).json({ user })
    }
))
 
userRoute.put("/:id", asyncHandler(
    async (req, res) => {
        try{
        const updated = await User.findByIdAndUpdate(
             req.params.id,
            req.body,
                { new: true, runValidators: true}
        )
        res.status(200).json(updated);
    }catch(err){
        res.send(err);
    }
}
))

userRoute.delete("/:id", asyncHandler(
    async (req, res) => {
        const u = await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User Deleted');
    }
))
 
module.exports = userRoute;