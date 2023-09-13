import express from 'express';
import moment from 'moment-timezone';
const app = express()
const port = 3000



const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const github_file_url = 'https://github.com/Musoye/hngx/blob/main/endpoints/server.js'
const github_repo_url = 'https://github.com/Musoye'
const status_code = 200
const currentDate = new Date();
const dayIndex = currentDate.getDay();
const utc_time = moment().tz('UTC').format('YYYY-MM-DDTHH:mm:ss[Z]');
const current_day = daysOfWeek[dayIndex];
app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name
    const track = req.query.track || 'backend';
    return res.json({
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url,
        github_repo_url,
        status_code,
    })
})


app.listen(port, () => {
    console.log('Welcome')
})
