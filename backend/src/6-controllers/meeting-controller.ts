import express, { NextFunction, Request, Response } from "express"
import meetingLogic from "../5-logic/meeting-logic"
import MeetengModel from "../4-models/meeting-model"


const router = express.Router()

// GET http://localhost:3001/api/developer-teams/
router.get("/developer-teams/", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meetings = await meetingLogic.GetAllTeamsLogic()
        response.json(meetings)
    } catch (error: any) {
        next(error)
    }
})

// GET http://localhost:3001/api/developer-teams/
router.get("/meetings-by-id-spesific-team/:id([0-9]+)", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id
        const meetings = await meetingLogic.getMeetingsByIdSpecificTeam(id)
        response.json(meetings)
    } catch (error: any) {
        next(error)
    }
})

router.post("/meetings", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const meeting = new MeetengModel(request.body)
        const addedMeeting = await meetingLogic.addMeeting(meeting)
        response.status(201).json(addedMeeting)
    } catch (error: any) {
        next(error)
    }
})

router.delete("/meetings/:id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const id = +request.params.id
        await meetingLogic.deleteMeeting(id)
        response.sendStatus(204)
    } catch (error: any) {
        next(error)
    }
})

export default router
