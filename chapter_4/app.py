from flask import Flask, render_template
app = Flask(__name__)

## URL 별로 함수명이 같거나,
## route('/') 등의 주h소가 같으면 안됩니다.

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/mypage')
def mypage():  
   return 'This is My Page!'

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)

#static 폴더는 html 파일 외에 이미지, css파일과 같은 파일을 담아두는 역할을 합니다.

#* GET        →     통상적으로! 데이터 조회(Read)를 요청할 때
#                   예) 영화 목록 조회
#             →     데이터 전달 : URL 뒤에 물음표를 붙여 key=value로 전달
#             →     예: google.com?q=북극곰
@app.route('/test', methods=['GET'])
def test_get():
   title_receive = request.args.get('title_give')
   print(title_receive)
   return jsonify({'result':'success', 'msg': '이 요청은 GET!'})

#* POST     →      통상적으로! 데이터 생성(Create), 변경(Update), 삭제(Delete) 요청 할 때
#                  예) 회원가입, 회원탈퇴, 비밀번호 수정
#           →      데이터 전달 : 바로 보이지 않는 HTML body에 key:value 형태로 전달
@app.route('/test', methods=['POST'])
def test_post():
   title_receive = request.form['title_give']
   print(title_receive)
   return jsonify({'result':'success', 'msg': '이 요청은 POST!'})