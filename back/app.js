import express from "express"
import cors from "cors"
import testRoute from "./src/routes/test.route.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/test", testRoute)

export default app