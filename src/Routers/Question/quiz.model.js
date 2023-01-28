const { Schema, model } = require("mongoose");

const Question = new Schema({
    category: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    difficulty: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    },
    correct_answer: {
        type: String,
        require: true
    },
    incorrect_answers: []
})

const QuizModel = model("question", Question);

module.exports = QuizModel;