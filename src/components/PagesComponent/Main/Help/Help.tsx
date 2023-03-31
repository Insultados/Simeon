import classes from './Help.module.css';

function Help() {
    return (
        <>
            <div className={classes.title}>
                <h3>Помощь храму</h3>
            </div>
            <div className={classes.help_container}>
                <p>
                    Благоукрасительство храма и его территории, 
                    организация жизни прихода - дело нелегкое и 
                    постоянно требует больших финансовых и материальных затрат. 
                    В этой связи мы будем рады любой помощи со стороны наших прихожан 
                    и просто доброжелателей.
                </p>
            </div>
        </>
    );
}

export default Help;