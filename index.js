const express = require('express');
const { connection } = require("./db");
const cors = require('cors');
const { auth } = require('./middleware/auth.middleware');
const { quizRouter } = require('./routes/Quiz.routes');
const { userRouter } = require('./routes/User.routes');
const app = express();
require("dotenv").config()


app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Basic API Endpoint")
})

app.use("/user", userRouter)

app.use(auth)
app.use("/quiz", quizRouter)




app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to the Database server")

    } catch (error) {
        console.log(error)
        console.log("Cann't connected to the Database server")
    }

    console.log(`Server is running at port ${process.env.port}`)
})