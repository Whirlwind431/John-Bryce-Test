import Joi from "joi"

class MeetengModel {
    public id: number
    public team_id: number
    public dateTime_start: Date
    public dateTime_end: Date
    public description: string
    public meeting_room: string


    public constructor(meeting: MeetengModel) {
        this.id = meeting.id
        this.team_id = meeting.team_id
        this.dateTime_start = meeting.dateTime_start
        this.dateTime_end = meeting.dateTime_end
        this.description = meeting.description
        this.meeting_room = meeting.meeting_room
    }

    private static vallidationSchema = Joi.object({
        id: Joi.number().optional().positive().integer(),
        team_id: Joi.number().optional().positive().integer(),
        dateTime_start: Joi.date().required().greater(Date.now()).messages({
            'any.required': 'Start date is required',
            'date.greater': 'Start date/time must be greater than the current date/time'
        }),
        dateTime_end: Joi.date().greater(Joi.ref('dateTime_start')).required(),
        description: Joi.string().required().min(2).max(100),
        meeting_room: Joi.string().required().min(2).max(30)
    })

    public validate(): string {
        const result = MeetengModel.vallidationSchema.validate(this)
        return result.error?.message
    }
}

export default MeetengModel