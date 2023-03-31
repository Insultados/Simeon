import classes from './VkWidget.module.css'

function VkWidget() {

    return (
        <>
            <div className={classes.title}>
                <h3>Официальная группа</h3>
            </div>
            <div className={classes.widget_container}>
                <div id="vk_groups"></div>
            </div>
        </>
    );
}

export default VkWidget;