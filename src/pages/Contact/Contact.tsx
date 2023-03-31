import classes from './Contact.module.css';

function Contact() {
    return (
        <div className={classes.contact_container}>
            <div className={classes.title}>
                <h3>Контакты</h3>
            </div>
            <div className={classes.text_container}>
                <p>Православная религиозная организация «Архиерейское Подворье храма святого праведного Симеона Верхотурского в городе Перми Пермского края» Пермской епархии Русской Православной Церкви (Московский Патриархат) <br/>
                    Юридический адрес 614000 г. Пермь, ул. Пушкина, д. 83 <br/>
                    Почтовый адрес 614000 г. Пермь, ул. Пушкина, д. 83 <br/>
                    Телефон 8 (342) 247-78-33, 236-45-80 <br/>
                    Электронный адрес sv.simeon@yandex.ru <br/>
                    Реквизиты Храма: <br/>
                </p>
                <p>Архиерейское Подворье храма святого праведного Симеона Верхотурского <br/>
                    ИНН: 5902710449 <br/>
                    КПП: 590201001 <br/>
                    Расчетный счет: 40703810649490050962 <br/>
                    Кор. счет: 30101810900000000603 <br/>
                    БИК: 042202603 в Волго-Вятском банке ОАО «Сбербанк России» г. Перми <br/>
                    Цель платежа: "Пожертвование на уставную деятельность" <br/>
                </p>
            </div>
            <iframe title={'yandex-maps'} src="https://yandex.ru/map-widget/v1/?um=constructor%3A52f0c7b747be0bd27326cf621c67d175d9b16497663430cde9b046aba6935b6f&amp;source=constructor" width="70%" height="400"></iframe>
        </div>
    );
}

export default Contact;