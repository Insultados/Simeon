import classes from './Worship.module.css';

function Worship() {
    return (
        <>
            <div className={classes.title}>
                <h3>Череда Богослужний</h3>
            </div>
            <div className={classes.worship_container}>
                <p>Богослужения в нашем храме совершаются... <br/>
                    <a href='/schedule'>Смотреть полное расписание</a></p>
            </div>
        </>
    );
}

export default Worship;