from flask import Flask, render_template, jsonify, request

from pymongo import MongoClient  # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)

app = Flask(__name__)

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta  # 'dbsparta'라는 이름의 db를 만들거나 사용합니다.


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/memo', methods=['POST'])
def post_memo():
    # 클라이언트에게서 데이터 받기
    title_receive = request.form['title_give']
    text_receive = request.form['text_give']

    # DB에 넣을 데이터 정리
    memo = {'title':title_receive, 'text' : text_receive}
    # mongoDB에 데이터를 넣기
    db.memos.insert_one(memo)

    return jsonify({'result': 'success'})

@app.route('/memo', methods=['PUT'])
def modify_memo():
    # 클라이언트에게서 수정할 데이터 받기
    extitle_receive = request.form['extitle_give']
    title_receive = request.form['title_give']
    text_receive = request.form['text_give']

    # mongoDB에서 데이터 수정
    db.memos.update_one({'title':extitle_receive}, {'$set': {'title': title_receive, 'text': text_receive}})

    return jsonify({'result': 'success'})

@app.route('/memo', methods=['DELETE'])
def delete_memo():
    # 없앨 데이터의 title값 받기
    title_receive = request.form['title_give']

    # mongoDB에서 데이터 삭제
    db.memos.delete_one({'title': title_receive})
    
    return jsonify({'result': 'success'})

@app.route('/memo', methods=['GET'])
def read_memos():
    # 1. mongoDB에서 모든 데이터 조회해오기 (Read)
    result = list(db.memos.find({},{'_id': 0}))
    # 2. articles라는 키 값으로 article 정보 보내주기
    return jsonify({'result': 'success', 'memos': result})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)