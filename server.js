const express = require('express')
const app = express()


app.use('/get-hello', (req, res) => {
    return res.status(200).json({
        "message": "Success",
        "data": {
            "response": "Hello World"
        }
    })
})


app.listen(4000, () => console.log("Server started"))