import { number } from "joi";
import dal from "../2-utils/dal";
import TeamModel from "../4-models/team-model";
import MeetengModel from "../4-models/meeting-model";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-model";
import { OkPacket } from "mysql";



async function GetAllTeamsLogic(): Promise<TeamModel[]> {

    // Creating the query:
    const sql = `
SELECT 
       id,   
       team_name
FROM developer_teams;
`

    // Execute
    const meetings = await dal.execute(sql)

    return meetings

}

async function getMeetingsByIdSpecificTeam(idSpecificTeam: number): Promise<MeetengModel[]> {

    const sql = `
SELECT M.id,
M.team_id,
CONCAT(DATE_FORMAT(dateTime_start, "%Y/%m/%d"), ' ', TIME_FORMAT(dateTime_start, "%H:%i:%s")) AS 'dateTime_start',
CONCAT(DATE_FORMAT(dateTime_end, "%Y/%m/%d"), ' ', TIME_FORMAT(dateTime_end, "%H:%i:%s")) AS 'dateTime_end',
M.description,
M.meeting_room,

D.team_name
FROM team_meetings AS M JOIN developer_teams AS D
ON M.team_id = D.id
WHERE M.team_id = ?
    `
    const values = [idSpecificTeam]

    // Execute
    const meetings = await dal.execute(sql, values)

    if (meetings.length === 0) console.log(" A chosen team doesn't have any meetings yet");
    


    return meetings
}


async function addMeeting(meeting: MeetengModel): Promise<MeetengModel> {

    // Check if user's input is OK
    const errors = meeting.validate()
    if (errors) throw new ValidationErrorModel(errors)

   
    
    const sql = `
    INSERT INTO team_meetings(team_id,dateTime_start, dateTime_end,description,meeting_room)
    VALUES(?,?,?,?,?);
    `
    const values = [meeting.team_id, meeting.dateTime_start, meeting.dateTime_end, meeting.description, meeting.meeting_room];
    // Execute
    const info: OkPacket = await dal.execute(sql, values)

    // Set auto increment id 
    meeting.id = info.insertId;

    return meeting
}

async function deleteMeeting(id: number): Promise<void> {
    const sql = `DELETE FROM team_meetings WHERE id = ?`
    const values = [id]
    const info: OkPacket = await dal.execute(sql, values)
    if (info.affectedRows === 0) throw new ResourceNotFoundErrorModel(id)
}

export default {
    GetAllTeamsLogic,
    getMeetingsByIdSpecificTeam,
    addMeeting,
    deleteMeeting
}