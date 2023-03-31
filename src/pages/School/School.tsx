import ControlledExample from '../../components/UI/ControlledCarousel/ControlledCarousel';
import classes from './School.module.css';

import img_1 from './images/shkola.jpg'
import img_3 from './images/1449988.jpg'
import img_4 from './images/1449989.jpg'
import img_5 from './images/1449990.jpg'
import img_6 from './images/1449991.jpg'
import img_7 from './images/1449994.jpg'


function School() {
    return (
        <div className={classes.school_container}>
            <div className={classes.title}>
                <h3>Воскресная школа</h3>
            </div>
            <div className={classes.text_container}>
                <p>
                    <img src={img_1} alt="" style={{
                        float: "left",
                        margin: "7px 7px 7px 0",
                        maxWidth: "55%"
                    }} />
                    С началом возрождения нашего прихода, при храме образовалась Воскресная школа для детей. Пока она небольшая и не имеет отдельного помещения, но очень дружная и сплоченая. <br />
                    На уроках мы изучаем Священное Писание Ветхого и Нового Завета, учимся читать молитвы и понимать их смысл. Изучаем церковные песнопения, принимаем участие в богослужении. На уроках творчества мы любим мастерить различные поделки и аппликации. <br />
                    Особо мы готовимся к Праздникам. Уже стало доброй традицией устраивать представления кукольного театра, а также пение народных песен. <br />
                    Для удобства прихожан в храме есть отдельная комната для детей и родителей. Там можно спокойно переодеться, поиграть и просто передохнуть родителям с маленькими детьми. <br />
                    Приглашаем всех в наш храм. <br />
                </p>
            </div>
            <div className={classes.carousel}>
                <ControlledExample images={[img_3, img_4, img_5, img_6, img_7]} />
            </div>
        </div>
    );
}

export default School;