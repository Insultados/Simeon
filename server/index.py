import requests
from config import token
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin


group_name = '88766018'

application = Flask(__name__)
CORS(application, support_credentials=True)


def get_wall_text(posts, post_num):

    post_text = ['']
    try:
        for i in (posts['response']['items'][post_num]['text']):
            post_text[0] += i
    except:
        post_text[0] += ''

    return post_text[0].split('\n')


def get_wall_img(posts, post_num):

    post_img_url = None

    try:
        post_img_url = (posts['response']['items'][post_num]
                        ['attachments'][0]['photo']['sizes'][2]['url'])
    except:
        print('image is not found')

    return post_img_url


def get_album_photos(request_img):
    post_img_url = []
    albums_list = []

    request_img = request_img['response']
    albums_title = []

    try:
        for i in request_img['items']:
            post_img_url.append(i['id'])
            albums_title.append(i['title'])
    except:
        print('images is not found')

    for album_id in post_img_url:
        url_album = f'https://api.vk.com/method/photos.get?owner_id=-{group_name}&album_id={album_id}&count=100&access_token={token}&v=5.131'
        albums_list.append(requests.get(url_album).json())

    albums = []

    for i in range(len(albums_list)):
        album = []
        for j in range(len(albums_list[i]['response']['items'])):
            album.append(albums_list[i]['response']
                         ['items'][j]['sizes'][3]['url'])
        albums.append(album)

    return [albums, albums_title]


@ application.route('/api/data/', methods=['GET', 'OPTIONS'])
@ cross_origin(supports_credentials=True)
def getAlltData():
    return jsonify({'data': request_wall.json()})


@ application.route('/api/photos/', methods=['GET', 'OPTIONS'])
@ cross_origin(supports_credentials=True)
def getAlbums():
    return jsonify({'data': img_list})


@ application.route('/api/', methods=['GET', 'OPTIONS'])
@ cross_origin(supports_credentials=True)
def get():
    post_count = 16
    news_number = int(request.args.get('news-page'))
    posts = request_wall.json()

    post_list_text = [get_wall_text(posts, i) for i in range(
        16*(news_number-1), post_count*news_number)]
    post_list_img = [get_wall_img(posts, i) for i in range(
        16*(news_number-1), post_count*news_number)]
    return jsonify({'posts': post_list_text, 'img': post_list_img})


@ application.route('/api/post', methods=['GET', 'OPTIONS'])
@ cross_origin(supports_credentials=True)
def getPostByID():
    post_number = int(request.args.get('post-number'))
    posts = request_wall.json()
    post_text = [get_wall_text(posts, post_number)]
    post_img = [get_wall_img(posts, post_number)]
    return jsonify({'post': post_text, 'img': post_img})


if __name__ == "__main__":

    url_wall = f'https://api.vk.com/method/wall.get?owner_id=-{group_name}&count=100&access_token={token}&v=5.131'
    request_wall = requests.get(url_wall)
    url_img = f'https://api.vk.com/method/photos.getAlbums?owner_id=-{group_name}&count=6&access_token={token}&v=5.131'
    request_img = requests.get(url_img)
    img_list = get_album_photos(request_img.json())

    application.run(debug=True, port='5000')
