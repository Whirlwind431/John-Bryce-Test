import mysql from "mysql"
import appConfig from "./appConfig"


// Create a pool of connection to MySQL
const connection = mysql.createPool({
    host: appConfig.host,
    user: appConfig.user,
    password: appConfig.password,
    database: appConfig.database
})

function execute(sql: string, values?: any[]): Promise<any> {
    return new Promise<any>((res, rej) => {
        connection.query(sql, values, (err, result) => {
            if (err) {
                rej(err)
                return
            }
            res(result)
        })
    })
}

export default {
    execute
}