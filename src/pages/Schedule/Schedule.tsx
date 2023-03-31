import classes from './Schedule.module.css';
import scheduleImg from './images/schedule.jpg'

function Schedule() {
    return (
        <div className={classes.schedule_container}>
            <div className={classes.title}>
                <h3>Расписание Богослужений</h3>
            </div>
            <div className={classes.img_container}>
                <img src={scheduleImg} alt="" />
            </div>
        </div>
    );
}

export default Schedule;