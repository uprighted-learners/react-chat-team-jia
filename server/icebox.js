const express = require('express')
const app = express()
const dbPath = "./servers/messages.json"

const PORT = process.env.PORT || 9000

app.use(express.static())
app.post('/send', (req, res)=>{//if this doesnt work just add read(dbpath)
    const message = req.body.message
    const name = req.body.name
    const room = req.body.room
    const newMessage = {
        name: name,
        message: message,
        room: room
    }
    write(dbPath, newMessage)
    res.send(newMessage)

})
app.listen(PORT, (req,res)=>{
    console.log("Server is running on port " + PORT)
})