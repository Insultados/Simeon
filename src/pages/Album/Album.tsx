import classes from './Album.module.css';
import useFetch from '../../hooks/useFetch';
import { Spinner } from 'react-bootstrap';
import ControlledExample from '../../components/UI/ControlledCarousel/ControlledCarousel';
function Album() {


    const url = `http://localhost:5000/api/photos/`;
    const responseData = useFetch(url);
    const [image]: any | any[] = Object.values(responseData)

    console.log(image)


    return (
        <div className={classes.album_container}>
            <div className={classes.title}>
                <h3>Альбом</h3>
            </div>
            <div className={classes.text_container}>
                {(Array.isArray(image))
                    ? image[0].map((e: any | any[], index: number) => (
                        <div key={index} className={classes.album}>
                            <div className={classes.album_title}>
                                <h4>{image[1][index]}</h4>
                            </div>
                            <ControlledExample images={e} />
                        </div>
                    ))
                    : <Spinner variant='success' animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }
            </div>

        </div>
    );
}

export default Album;