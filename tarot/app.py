from flask import Flask, render_template, jsonify, request

from pymongo import MongoClient  # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)

app = Flask(__name__)

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta  # 'dbsparta'라는 이름의 db를 만들거나 사용합니다.


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add_card():
    # 클라이언트에게서 데이터 받기
    num_receive = int(request.form['num_give']) 
    name_receive = request.form['name_give']
    text_receive = request.form['text_give']

    # DB에 넣을 데이터 정리
    card = {'no': num_receive ,'name':name_receive, 'text' : text_receive}
    # mongoDB에 데이터를 넣기
    db.cards.insert_one(card)

    return jsonify({'result': 'success'})


@app.route('/modify', methods=['PUT'])
def modify_card():
    # 클라이언트에게서 수정할 데이터 받기
    exnum_receive = int(request.form['exnum_give'])
    num_receive = int(request.form['num_give'])
    name_receive = request.form['name_give']
    text_receive = request.form['text_give']

    print(exnum_receive)
    print(num_receive)
    print(name_receive)
    print(text_receive)

    # mongoDB에서 데이터 수정
    db.cards.update_one({'no':exnum_receive}, {
        '$set': {
            'no': num_receive, 
            'name': name_receive,
            'text': text_receive
        }})
    
    return jsonify({'result': 'success'})

@app.route('/delete', methods=['DELETE'])
def delete_card():
    # 없앨 데이터의 title값 받기
    num_receive = request.form['num_give']
    print(num_receive)  

    if num_receive is None:
        return jsonify({'result': 'error', 'message': 'No card number provided'})

    num_receive = int(num_receive)
    print(num_receive)

    # mongoDB에서 데이터 삭제
    db.cards.delete_one({'no': num_receive})
    
    return jsonify({'result': 'success'})

@app.route('/cards', methods=['GET'])
def read_cards():
    # 1. mongoDB에서 모든 데이터 조회해오기 (Read)
    result = list(db.cards.find({},{'_id': 0}))
    # 2. articles라는 키 값으로 article 정보 보내주기
    return jsonify({'result': 'success', 'cards': result})

@app.route('/card', methods=['GET'])
def read_card():
    # 정해진 데이터의 no.값 받기
    num_receive = int(request.args.get('num_give'))

    # 1. mongoDB에서 정해진 데이터 조회해오기 (Read)
    result = db.cards.find_one({'no': num_receive}, {'_id': 0})

    # 2. cards라는 키 값으로 card 정보 보내주기
    return jsonify({'result': 'success', 'card': result})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)