import classes from './Calendar.module.css';




function Calendar() {
    return (
        <>
            <div className={classes.title}>
                <h3>Икона дня</h3>
            </div>
            <div id='calendar_container' className={classes.calendar_container}>
                <div id="iconPlace"></div>
                <div id="iconTextPlace"></div>
                <div id="iconDayPlace"></div>
            </div>
        </>
    );
}

export default Calendar;
