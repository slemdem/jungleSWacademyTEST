

let bannerBackground = document.querySelector('.bannerSelected')

function show_btn(){
    let tempHtml = '';

}

function returnreslt(){
    let result ="사리아";


    return result;
}

function run1(){
    $(".runresult").html("");
    let tempHtml = '';
    let result = returnreslt();

    tempHtml += '<div class="RR">'+ result + '</div>';

    $(".runresult").append(tempHtml);

}

function run10(){
    $(".runresult").html("");
    let tempHtml = '';
    let result;
    for(let i =1; i<= 10;i++){
        result = returnreslt();
        tempHtml += '<div class="RR" id= "runresult'+ i + '">' + result + '</div>';
    }
    console.log(tempHtml)
    $(".runresult").append(tempHtml);
}

function update_expectPer(n){
    $(".runresult").html("");

}

function update_realPer(){
    
}

