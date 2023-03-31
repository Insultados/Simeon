import Calendar from '../../components/PagesComponent/Main/Calendar/Calendar';
import Help from '../../components/PagesComponent/Main/Help/Help';
import VkWidget from '../../components/PagesComponent/Main/VkWidget/VkWidget';
import Worship from '../../components/PagesComponent/Main/Worship/Worship';
import ControlledCarousel from '../../components/UI/ControlledCarousel/ControlledCarousel';
import classes from './Home.module.css';
import img1 from './image/pic9.jpg';
import img2 from './image/pic6.jpg';
import img3 from './image/pic15.jpg';
import img4 from './image/pic12.jpg';
import img5 from './image/pic8.jpg';
import img6 from './image/pic14.jpg';
import NewsContainer from '../../components/PagesComponent/Main/NewsContainer/NewsContainer';


function Home() {
    return (
        <div className={classes.home_container}>
            <div className={classes.carousel}>
                <ControlledCarousel images={[img1, img2, img3, img4, img5, img6]} />
            </div>
            <div className={classes.main_container}>
                <NewsContainer />
                <div className={classes.right_container}>
                    <div className={classes.right_item}>
                        <Calendar />
                    </div>
                    <div className={classes.right_item}>
                        <Worship />
                    </div>
                    <div className={classes.right_item}>
                        <Help />
                    </div>
                    <div className={classes.right_item}>
                        <VkWidget />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;