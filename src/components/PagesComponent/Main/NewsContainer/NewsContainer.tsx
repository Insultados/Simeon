
import classes from './NewsContainer.module.css';
import FeedPost from '../FeedPost/FeedPost';
import useFetch from '../../../../hooks/useFetch';
import PaginationBasic from '../../../UI/Pagination/PaginationBasic';
import { Spinner } from 'react-bootstrap';

function NewsContainer() {

    let urlSearch: string = window.location.search.replace(/[^\d]/g, '');
    urlSearch = urlSearch === '' ? '1' : urlSearch;

    const url = `http://localhost:5000/api/?news-page=${urlSearch}`
    const responseData = useFetch(url);

    const [images, posts]: any | any[] = Object.values(responseData)


    return (
        <div className={classes.news_container}>
            <div className={classes.title}>
                <h3>Новости</h3>
            </div>
            <div className={classes.news_list}>
                {(Array.isArray(posts))
                    ? posts.map((e: any | any[], index: number) => (
                        (images[index] !== null && e !== '')
                            ? <div key={index} className={classes.news_item}>
                                <FeedPost postNum={(index) + 16 * (Number(urlSearch) - 1)} text={e} image={images[index]} />
                            </div>
                            : <></>
                        
                ))
                : <Spinner variant='success' animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                }
            </div>
            <br />
            <PaginationBasic numActive={Number(urlSearch)} pageCount={8} />
        </div>
    );
}

export default NewsContainer;