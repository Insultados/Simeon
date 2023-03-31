import classes from './Clergy.module.css';
import img_1 from './images/1.jpg'
import img_2 from './images/2.jpg'


function Clergy() {
    return (
        <div className={classes.clergy_container}>
            <div className={classes.title}>
                <h3>Духовенство храма</h3>
            </div>
            <div className={classes.text_container}>
                <p>
                    Настоятель храма - священник Владимир Киров
                </p>
                <img src={img_1} alt="" />
                <br />
                <br />
                <p>
                    Заштатный священник храма - протоиерей Александр Логинов
                </p>
                <img src={img_2} alt="" />
            </div>
        </div>
    );
}

export default Clergy;