const Sort = {
    BY_LIKES: "likes",
    BY_VIEWERS: "viewers",
    BY_DATE: "date",
};

let sortMode = Sort.BY_LIKES
let trashMode = false

// index.html 의 로드가 완료되면 ready(...) 안에 등록된 함수가 자동으로 호출됩니다.
// 아래는 함수에 이름을 부여하지 않고 바로 ready(...) 의 매개변수로 함수를 전달하는 방식으로 로드 완료시 호출될 함수를 등록합니다.
$(document).ready(function () {
    // 영화 목록을 보여줍니다.
    showMovie()

    // 현재 적용되고 있는 정렬 방식의 버튼에 눌려져 보이는 효과를 줍니다.
    displaySorter()

    // 휴지통 모드에 따라 메뉴를 다르게 바꿔줍니다.
    displayTrashMode(trashMode)
});

function showMovie() {
    // 1. id="movie-box" 로 된 태그의 내부 html 태그를 모두 삭제합니다.
    $('#movie-box').empty()

    // 2. 휴지통을 보고 있는지 여부에 따라 호출할 API 를 선택합니다.
    //    휴지통이 아닐 경우 GET /api/list
    //    휴지통일 경우 GET /api/list/trash
    if (trashMode == false) {
        $.ajax({
            type: "GET",
            url: "/api/list",
            data: {'sortMode': sortMode},
            success: function(response) {
                if (response['result'] != 'success') {
                    alert(sortMode + ' 순으로 영화 목록 받아오기 실패!')
                    return
                }
                // 3. 서버가 돌려준 stars_list를 movies 라는 변수에 저장합니다.
                let movies = response['movies_list']
                // 4. 영화 카드를 추가합니다. 이 때 휴지통 여부에 따라 카드 모양이 달라지므로 휴지통 여부(=false)도 같이 전달합니다.
                addMovieCards(movies, false)
            },
        })
    } else {
        $.ajax({
            type: "GET",
            url: "/api/list/trash",
            data: {'sortMode': sortMode},
            success: function(response) {
                if (response['result'] != 'success') {
                    alert(sortMode + ' 순으로 영화 목록 받아오기 실패!')
                    return
                }
                // 3. 서버가 돌려준 stars_list를 movies 라는 변수에 저장합니다.
                let movies = response['movies_list']
                // 4. 영화 카드를 추가합니다. 이 때 휴지통 여부에 따라 카드 모양이 달라지므로 휴지통 여부(=false)도 같이 전달합니다.
                addMovieCards(movies, true)
            },
        })
    }
}

function addMovieCards(movies, trashMode) {
    // for 문을 활용하여 movies 배열의 요소를 차례대로 조회합니다.
    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i]

        // 1. movie[i] 요소의 title,viewers, likes 키 값을 활용하여 값을 조회합니다.
        let id = movie['_id']
        let title = movie['title']
        let viewers = movie['viewers']
        let poster = movie['poster_url']
        let likes = movie['likes']
        let month = Number(movie['open_month']) 
        let date = Number( movie['open_day'])

        if(month < 10){
            if(date < 10){
                date = movie['open_year'] + ".0"+ month + ".0" +date
            } else{
                date = movie['open_year'] + ".0"+ month + "." +date
            }
        }else {
            if(date < 10){
                date = movie['open_year'] + "."+ month + ".0" +date
            } else{
                date = movie['open_year'] + "."+ month + "." +date
            }
        }

        // 2. 영화 카드를 만듭니다.
        let cardContentHtml = `
            <div class="col-md-4">
                <img src="${poster}" class="movie-poster"/>
            </div>
            <div class="col-md-8">
                <div class= "card-body">
                    <p>
                    <span class="movie-title">${title}</span><p>
                    <span class="icon"><i class="fas fa-thumbs-up"></i></span><span class="movie-likes">${likes}</span><p>
                    누적관객수 <span class="movie-viewers">${viewers}</span> 명<p>
                개봉일 <span class="movie-date">${date}</span>
            </div>
        `

        // 3. 휴지통을 보고 있는지 여부에 따라 카드의 버튼을 다르게 설정해줍니다.
        let cardFooterHtml = ''
        if (trashMode == false) {
            cardFooterHtml = `
                <div class="card-footer">
                    <a href="#" id="moviebutton1" onclick="likeMovie('${id}')">
                    위로!
                    <i class="fas fa-thumbs-up"></i>
                    </a>
                    <a href="#" id="moviebutton2" onclick="trashMovie('${id}')">
                    휴지통으로
                    <i class="fas fa-trash"></i>
                    </a>
                </div>
            `
        } else {
            cardFooterHtml = `
                <div class="card-footer">
                <a href="#" id="moviebutton1" onclick="restoreMovie('${id}')">
                복구하기
                <i class="fas fa-trash-restore"></i>
                </a>
                <a href="#" id="moviebutton2" onclick="deleteMovie('${id}')">
                영구삭제
                <i class="fas fa-ban"></i>
                </a>
                </div>
            `
        }

        // 4. #movie-box에 생성된 HTML 을 붙입니다.
        $('#movie-box').append(`
            <div class="card mb-3" style="max-width: 540px;">
                ${cardContentHtml}
                ${cardFooterHtml}
            </div>
        `)
    }
}


///////////////////////////////////////////////////////////////////////////////
// 주의: 아래 like movie 는 임의의 영화에 좋아요가 표시됩니다.
// 이 구현을 선택한 무비에 좋아요를 넣는 것으로 수정하셔야 됩니다. (함수 매개변수 및 함수 구현 모두)
function likeMovie(id) {
    $.ajax({
        type: "POST",
        url: "/api/like",
        data: {
            id_give: id
        },
        success: function (response) {
            if (response['result'] == 'success') {
                // 2. '좋아요 완료!' 얼럿을 띄웁니다.
                alert('좋아요 완료!')
                // 3. 변경된 정보를 반영하기 위해 새로고침합니다.
                showMovie()
            } else {
                alert('좋아요 실패ㅠㅠ')
            }
        }
    });
}

function trashMovie(id) {
    $.ajax({
        type: "POST",
        url: "/api/trash",
        data: {
            id_give: id
        },
        success: function (response) {
            if (response['result'] == 'success') {
                // 2. '휴지통 보내기 완료' 얼럿을 띄웁니다.
                alert('휴지통 보내기 완료!')
                // 3. 변경된 정보를 반영하기 위해 새로고침합니다.
                showMovie()
            } else {
                alert('휴지통 보내기 실패ㅠㅠ')
            }
        }
    });
}

function restoreMovie(id) {
    $.ajax({
        type: "POST",
        url: "/api/restore",
        data: {
            id_give: id
        },
        success: function (response) {
            if (response['result'] == 'success') {
                // 2. '휴지통에서 복구 완료!' 얼럿을 띄웁니다.
                alert('휴지통에서 복구 완료!')
                // 3. 변경된 정보를 반영하기 위해 새로고침합니다.
                showMovie()
            } else {
                alert('휴지통에서 복구 실패ㅠㅠ')
            }
        }
    });
}

function deleteMovie(id) {
    $.ajax({
        type: "DELETE",
        url: "/api/delete",
        data: {
            id_give: id
        },
        success: function (response) {
            if (response['result'] == 'success') {
                // 2. '삭제 완료! 안녕!' 얼럿을 띄웁니다.
                alert('삭제 완료! 안녕!')
                // 3. 변경된 정보를 반영하기 위해 새로고침합니다.
                showMovie()
            } else {
                alert('삭제 실패ㅠㅠ')
            }
        }
    });
}

// 정렬 기준 버튼을 클릭하면 호출됨
function changeSorter(newMode) {
    if (sortMode == newMode) {
        return
    }
    sortMode = newMode
    displaySorter()
    
    document.getElementById("sorter-"+newMode).classList.toggle("active")
    showMovie()
}

// 정렬 기준에 따라 해당 버튼만 활성화 시키고 다른 버튼은 비활성화 시킴
function displaySorter() {
    document.getElementById("sorter-likes").classList.remove("active")
    document.getElementById("sorter-viewers").classList.remove("active")
    document.getElementById("sorter-date").classList.remove("active")
}

function displayTrashMode(trashMode) {
    // trashMode 에 따라 "휴지통 보기" 또는 "휴지통 나가기" 가 출력 되게 구현해야 됩니다.
    if(trashMode == false){
        $('#trash-mode-box').append(`
            <a herf="#" onclick="change_trashMode()">
            <i class="fas fa-trash"></i>
            휴지통 보기<a>
        `)
        trashMode = true
    }else{
        $('#trash-mode-box').append(`
            <a herf="#" onclick="change_trashMode()">
            <i class="fas fa-trash-restore"></i>
            휴지통 나가기<a>
        `)
        trashMode = false
    }
}

function change_trashMode(){
    if(trashMode==false){
        trashMode=true

        showMovie()
        $("#trash-mode-box").empty()
        displayTrashMode(trashMode)
    }else{
        trashMode=false
        
        showMovie()
        $("#trash-mode-box").empty()
        displayTrashMode(trashMode)
    }

}