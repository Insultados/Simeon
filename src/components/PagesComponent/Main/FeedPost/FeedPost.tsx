/* eslint-disable eqeqeq */

import Button from '../../../UI/Button/Button';
import classes from './FeedPost.module.css'
import standartImage from './images/_bVj7RlVpnE.jpg'

function FeedPost({ image, text, postNum }: any) {

    let postText = text.slice(0, 2);

    postText = postText.filter((n: string) => { return n !== ' ' });
    postText = postText.filter((n: string) => { return n !== '' });
    postText = postText.filter((n: string) => { return n !== '\n' });

    return (
        <div className={classes.post_container}>
            <div className={classes.image_container} >
                <img className={classes.image} src={image == null ? standartImage : image} alt="" />
            </div>
            <div className={classes.text_container}>
                <div className={classes.text}>
                    <span>{postText == "" ? 'Смотрите информацию в прикрепленном изображении!' : postText}</span>
                </div>
                <div className={classes.button_container}>
                    <a href={`/post?post-number=${postNum}`}>
                        <Button text="Читать Полностью..." />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FeedPost;