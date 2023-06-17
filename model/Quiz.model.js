const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
    creator: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: { type: Array, required: true },
    leaderboard: { type: Array, required: true },
}, {
    versionKey: false,
})

const QuizModel = mongoose.model('quiz', quizSchema)

module.exports = {
    QuizModel
}