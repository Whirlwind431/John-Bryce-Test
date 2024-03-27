import express from "express"
import cors from "cors"
import appConfig from "./2-utils/appConfig"
import meetingController from "./6-controllers/meeting-controller"
import routeNotFound from "./3-middleware/route-not-found"
import CatchAll from "./3-middleware/catch-all"

const server = express()

server.use(cors()) // Allow any site to access our backend
server.use(express.json()) // creates request.body object if exists

server.use("/api", meetingController)
server.use("*", routeNotFound)
server.use(CatchAll)


server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));