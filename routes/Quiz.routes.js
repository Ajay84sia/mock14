const express = require("express");

const { QuizModel } = require("../model/Quiz.model")


const quizRouter = express.Router();

quizRouter.get("/", async (req, res) => {
    try {
        const quizes = await QuizModel.find()
        res.status(200).send(quizes)
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})

quizRouter.post("/add", async (req, res) => {
    const { creator, title, description, questions, leaderboard } = req.body
    try {
        const quiz = new QuizModel({ creator, title, description, questions, leaderboard })
        await quiz.save();
        res.status(200).send({
            "msg": "New Quiz has been added successfully"
        })
    } catch (error) {
        res.status(400).send({ "err": error.message })
    }
})

module.exports = {
    quizRouter
}