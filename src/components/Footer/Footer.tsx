import React from "react";
import classes from './Footer.module.css'

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.box}>
                <div className={classes.header}>
                    <p>Рекомендуем</p>
                </div>
                <div className={classes.content}>
                    <ul>
                        <li><a className={classes.link} href="http://www.patriarchia.ru/">Сайт Московского Патриархата</a></li>
                        <li><a className={classes.link} href="http://www.pravperm.ru/">Портал Пермской митрополии</a></li>
                    </ul>
                </div>
            </div>
            <div className={classes.box}>
                <div className={classes.header}>
                    <p>Контакты</p>
                </div>
                <div className={classes.content}>
                    <ul>
                        <li><span className={classes.link}>614000, Россия,</span></li>
                        <li>
                            <span className={classes.link}>
                                Пермь, ул. Пушкина, 83,
                                <br />Тел.: <a href="tel:+7 (342) 247-78-33">+7 (342) 247-78-33</a>,
                                <br /><a href="tel:+7 (342) 236-45-80">+7 (342) 236-45-80</a>
                            </span>
                        </li>
                        <li><span className={classes.link}>Электронная почта<br /><a href="mailto:sv.simeon@mail.ru">sv.simeon@mail.ru</a></span></li>
                        <li><span className={classes.link}>Настоятель храма<br />Священник Сергей Пятелин</span></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
