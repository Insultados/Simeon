import classes from './Post.module.css';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/UI/Button/Button';
import { Spinner } from 'react-bootstrap';

function Post() {
    let urlSearch: string = window.location.search.replace(/[^\d]/g, '')
    const url = `http://localhost:5000/api/post?post-number=${urlSearch}`
    const responseData = useFetch(url);
    const [image, post]: any | any[] = Object.values(responseData)
    
    return (
        <div className={classes.post_container}>
            <div className={classes.title}>
                <h3>Новость №{Number(urlSearch) + 1}</h3>
            </div>
            <div className={classes.text_container}>
                {post === 'O'
                    ? <div className={classes.loading}>
                        <Spinner variant='success' animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                    : post[0].map((e: string, index: number) => (
                        <p key={index}>{e}</p>
                    ))
                }
                <img className={classes.image} src={image} alt="" />

            </div>
            <br />
            <br />
            <div className={classes.button_container}>
                <div onClick={() => { window.history.back() }}>
                    <Button text={'Назад'} />
                </div>
            </div>
            <br />
        </div>
    );
}

export default Post;