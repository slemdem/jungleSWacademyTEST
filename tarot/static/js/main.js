$(document).ready(function () {
    showCards();
});

// 모든 카드 보여주기
function showCards(){
    $("#card-list").html("");
    $.ajax({
        type: "GET",
        url: "/cards",
        data: {},
        success: function (response) {
            let cards = response["cards"];
            let a;
            for (let i= 0; i < cards.length; i++) {
                a=cards[i]["no"];
                if(a<10){
                    a = "0"+a;
                    makeCard(a, cards[i]["name"],  cards[i]["text"]);
                }else if(a<=22){
                    makeCard(a, cards[i]["name"],  cards[i]["text"]);
                }else if(22<a<32){
                    a = "0"+((a%22)) +"r";
                    makeCard(a, cards[i]["name"],  cards[i]["text"]);
                }else{
                    a = ((a%22)) +"r";
                    makeCard(a, cards[i]["name"],  cards[i]["text"]);
                }
            }
        }
    })
}


function makeCard(order, title, text){
    let tempHtml = '';
    tempHtml += '<div class="card" id="card_'+order+'">'
    tempHtml += '   <img class="card-img-top" id="card_'+order+'img"' 
    tempHtml += '       src="../static/img/'+order+'.jpg"'
    //tempHtml += '       src="{{ url_for('static',filename='+order+'.jpg}}"'
    tempHtml += '       alt="Card image cap">'
    tempHtml += '   <div id="card_1body">'+title+'</div>'
    tempHtml += '   <div id="card_01text">'
    tempHtml += '       <h4>의미</h4>'
    tempHtml += '       <h5>'+text+'</h5>'
    tempHtml += '   </div>'
    tempHtml += '</div>'
    $("#card-list").append(tempHtml);
}

function showMenu(menuName){
    // 모든 메뉴 가리기
    $("#serch").hide();
    $("#add").hide();
    $("#modify").hide();
    $("#delete").hide();

    // 지정된 메뉴 보여주기
    $(menuName).show();
}

// 검색용 - 한개의 카드를 검색하여 보여주기
function serchCard(){
    let cardNum = $("#serch-card-order").val();
    console.log(cardNum)
    console.log(typeof(cardNum))


    $("#card-list").html("");
    $.ajax({
        type: "GET",
        url: "/card",
        data: {
            num_give: cardNum
        },
        success: function (response) {
            let cards = response["card"];
            let a = cards["no"];
            if(a<10){
                a = "0"+a;
                makeCard(a, cards["name"],  cards["text"]);
            }else if(a<=22){
                makeCard(a, cards["name"],  cards["text"]);
            }else if(22<a<32){
                a = "0"+((a%22)) +"r";
                makeCard(a, cards["name"],  cards["text"]);
            }else{
                a = ((a%22)) +"r";
                makeCard(a, cards["name"],  cards["text"]);
            }
        }
    })
}

// 카드 추가
function addCard() {
    let cardNum = $("#add-card-order").val();
    let cardName = $("#add-card-name").val();
    let cardText = $("#add-card-text").val();

    // 2. memo에 POST 방식으로 메모 생성 요청하기
    $.ajax({
        type: "POST", // POST 방식으로 요청하겠다.
        url: "/add", // /add라는 url에 요청하겠다.
        data: {num_give: cardNum, name_give: cardName, text_give: cardText}, // 데이터를 주는 방법
        success: function (response) { // 성공하면
            if (response["result"] == "success") {
                alert("저장 성공!");
                // 3. 성공 시 리스트 새로고침하기
                showCards();
            } else {
                alert("서버 오류!")
            }
        }
    })
}

function modifyCard() {
    let excardNum = $("#modify-card-order-selected").val();
    let cardNum = $("#modify-card-order-to").val();
    let cardName = $("#modify-card-name-to").val();
    let cardText = $("#modify-card-text-to").val();

    console.log(excardNum,cardNum,cardName ,cardText)
    console.log(typeof(excardNum),typeof(cardNum),typeof(cardName) ,typeof(cardText))
    $.ajax({
        type: "PUT", // PUT 방식으로 요청하겠다.
        url: "/modify", // /card라는 url에 요청하겠다.
        data: {
            exnum_give: excardNum,
            num_give: cardNum,
            name_give: cardName, 
            text_give: cardText
        }, // 데이터를 주는 방법
        success: function (response) { // 성공하면
            if (response["result"] == "success") {
                alert("저장 성공!");
                // 3. 성공 시 리스트 새로고침하기
                showCards();
            } else {
                alert("서버 오류!")
            }
        }
    })
}

function deleteCard(){
    let cardNum = $("#delete-card-order").val();
    console.log(cardNum)
    console.log(typeof(cardNum))

    $.ajax({
        type: "DELETE",
        url: "/delete",
        data: {
            num_give: cardNum
        },
        success: function (response) { // 성공하면
            if (response["result"] == "success") {
                alert("삭제 성공!");
                // 3. 성공 시 리스트 새로고침하기
                showCards();
            } else {
                alert("서버 오류!")
            }
        }
    })
}