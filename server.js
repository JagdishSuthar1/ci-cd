import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.get("", (req, res)=>{
    return res.status(200).send("Hello Jagdish")
})

const PORT = process.env.PORT
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))