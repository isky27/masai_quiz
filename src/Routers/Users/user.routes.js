const express = require("express");
const UserModel = require("./user.model");
const QuizModel = require("../Question/quiz.model")

const router = express.Router();

router.post('/', async(req,res)=>{
    const {name,category,level,number} = req.body;  
    try {
        const newUser = await UserModel.create({ name, category, level, number })
        newUser.save()
        return res.status(201).send(newUser)
    } catch (error) {
        return res.status(400).send("Something went wrong")
    }
})

router.get('/info', async (req, res) => {    
    try {
        const user = await UserModel.find();
        return res.status(200).send(user)    
    } catch (error) {
        return res.status(400).send("Something went wrong")
    }
})

router.get('/generate', async (req,res)=>{
    const {id} = req.body
    try {
        const user = await UserModel.findOne({_id:id});
        const {category,level,number}= user
        const ques =await QuizModel.find({category,difficulty:level}).limit(number)
        return res.status(200).send(ques)
    } catch (error) {
        return res.status(400).send("Something went wrong")
    }
})

module.exports = router;