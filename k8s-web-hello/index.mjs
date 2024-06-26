import express from 'express'
import os from 'os'
const app = express()
const PORT = 3000;

app.get("/", (reg, res) => {
    const helloMessage = `Version 2: Hello from the ${os.hostname()}`
    console.log(helloMessage);
    res.send(helloMessage);
})

app.listen(PORT, () => {
    console.log(`Web Server listening at port ${PORT}`)
})