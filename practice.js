function save(){
    let name = document.getElementById("input").value;
    console.log("ok");
    hellow(name);
}

function hey(){
    alert('안녕!');
}

function hellow(name){
    alert('안녕!'+ name);
}

//반복 연산
for (let i = 0; i < 100; i++) {
	console.log(i);
}

//논리 연산
function I_am_a(age, gender) {
    if (age<20 && gender=="남") {
        console.log("I am a boy.")
    } else if (gender=="남") {
        console.log("I am a man.")
    } else if (age<20 && gender=="여") {
        console.log("I am a girl.")
    } else if (gender=="여") {
        console.log("I am a woman.")
    } else {
        console.log("I am who I am")
    }
}

I_am_a(30, "남") // I am a man 출력

//n 까지 모든값 더하기
let n = 10
let sum = 0
for (let i=1;i<=n;i++) {
    sum += i
}
console.log(sum)  // 55

//함수화
function add_num(n) {
    let sum = 0
    for (let i=1;i<=n;i++) {
        sum += i
    }
    return sum
}


//미세먼지
let mise_list = [
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "도심권",
      MSRSTE_NM: "중구",
      PM10: 22,
      PM25: 14,
      O3: 0.018,
      NO2: 0.015,
      CO: 0.4,
      SO2: 0.002,
      IDEX_NM: "좋음",
      IDEX_MVL: 31,
      ARPLT_MAIN: "O3",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "도심권",
      MSRSTE_NM: "종로구",
      PM10: 24,
      PM25: 18,
      O3: 0.013,
      NO2: 0.016,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 39,
      ARPLT_MAIN: "PM25",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "도심권",
      MSRSTE_NM: "용산구",
      PM10: 0,
      PM25: 15,
      O3: 0.012,
      NO2: 0.027,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "점검중",
      IDEX_MVL: -99,
      ARPLT_MAIN: "점검중",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서북권",
      MSRSTE_NM: "은평구",
      PM10: 36,
      PM25: 14,
      O3: 0.019,
      NO2: 0.018,
      CO: 0.5,
      SO2: 0.005,
      IDEX_NM: "좋음",
      IDEX_MVL: 42,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서북권",
      MSRSTE_NM: "서대문구",
      PM10: 28,
      PM25: 9,
      O3: 0.018,
      NO2: 0.015,
      CO: 0.6,
      SO2: 0.004,
      IDEX_NM: "좋음",
      IDEX_MVL: 37,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서북권",
      MSRSTE_NM: "마포구",
      PM10: 26,
      PM25: 8,
      O3: 0.012,
      NO2: 0.021,
      CO: 0.5,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 36,
      ARPLT_MAIN: "NO2",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동북권",
      MSRSTE_NM: "광진구",
      PM10: 17,
      PM25: 9,
      O3: 0.018,
      NO2: 0.016,
      CO: 0.6,
      SO2: 0.001,
      IDEX_NM: "좋음",
      IDEX_MVL: 31,
      ARPLT_MAIN: "O3",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동북권",
      MSRSTE_NM: "성동구",
      PM10: 21,
      PM25: 12,
      O3: 0.018,
      NO2: 0.017,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 33,
      ARPLT_MAIN: "PM25",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동북권",
      MSRSTE_NM: "중랑구",
      PM10: 27,
      PM25: 10,
      O3: 0.015,
      NO2: 0.019,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 34,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동북권",
      MSRSTE_NM: "동대문구",
      PM10: 26,
      PM25: 9,
      O3: 0.016,
      NO2: 0.017,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 34,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동북권",
      MSRSTE_NM: "성북구",
      PM10: 27,
      PM25: 8,
      O3: 0.022,
      NO2: 0.014,
      CO: 0.5,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 37,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동북권",
      MSRSTE_NM: "도봉구",
      PM10: 25,
      PM25: 12,
      O3: 0.024,
      NO2: 0.011,
      CO: 0.3,
      SO2: 0.002,
      IDEX_NM: "좋음",
      IDEX_MVL: 41,
      ARPLT_MAIN: "O3",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동북권",
      MSRSTE_NM: "강북구",
      PM10: 30,
      PM25: 15,
      O3: 0.022,
      NO2: 0.02,
      CO: 0.4,
      SO2: 0.002,
      IDEX_NM: "좋음",
      IDEX_MVL: 39,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동북권",
      MSRSTE_NM: "노원구",
      PM10: 21,
      PM25: 14,
      O3: 0.017,
      NO2: 0.016,
      CO: 0.4,
      SO2: 0.004,
      IDEX_NM: "좋음",
      IDEX_MVL: 36,
      ARPLT_MAIN: "PM25",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서남권",
      MSRSTE_NM: "강서구",
      PM10: 36,
      PM25: 16,
      O3: 0.021,
      NO2: 0.013,
      CO: 0.4,
      SO2: 0.004,
      IDEX_NM: "좋음",
      IDEX_MVL: 42,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서남권",
      MSRSTE_NM: "구로구",
      PM10: 23,
      PM25: 10,
      O3: 0.022,
      NO2: 0.016,
      CO: 0.3,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 37,
      ARPLT_MAIN: "O3",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서남권",
      MSRSTE_NM: "영등포구",
      PM10: 29,
      PM25: 15,
      O3: 0.01,
      NO2: 0.022,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 41,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서남권",
      MSRSTE_NM: "동작구",
      PM10: 29,
      PM25: 15,
      O3: 0.012,
      NO2: 0.023,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 41,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서남권",
      MSRSTE_NM: "관악구",
      PM10: 27,
      PM25: 12,
      O3: 0.012,
      NO2: 0.022,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 37,
      ARPLT_MAIN: "NO2",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서남권",
      MSRSTE_NM: "금천구",
      PM10: 25,
      PM25: 15,
      O3: 0.015,
      NO2: 0.02,
      CO: 0.4,
      SO2: 0.004,
      IDEX_NM: "좋음",
      IDEX_MVL: 43,
      ARPLT_MAIN: "PM25",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "서남권",
      MSRSTE_NM: "양천구",
      PM10: 0,
      PM25: 14,
      O3: 0.016,
      NO2: 0.017,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "점검중",
      IDEX_MVL: -99,
      ARPLT_MAIN: "점검중",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동남권",
      MSRSTE_NM: "강남구",
      PM10: 31,
      PM25: 16,
      O3: 0.018,
      NO2: 0.018,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 39,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동남권",
      MSRSTE_NM: "서초구",
      PM10: 34,
      PM25: 13,
      O3: 0.024,
      NO2: 0.019,
      CO: 0.3,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 41,
      ARPLT_MAIN: "PM10",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동남권",
      MSRSTE_NM: "송파구",
      PM10: 25,
      PM25: 6,
      O3: 0.014,
      NO2: 0.025,
      CO: 0.4,
      SO2: 0.003,
      IDEX_NM: "좋음",
      IDEX_MVL: 42,
      ARPLT_MAIN: "NO2",
    },
    {
      MSRDT: "201912052100",
      MSRRGN_NM: "동남권",
      MSRSTE_NM: "강동구",
      PM10: 24,
      PM25: 14,
      O3: 0.016,
      NO2: 0.02,
      CO: 0.4,
      SO2: 0.002,
      IDEX_NM: "좋음",
      IDEX_MVL: 39,
      ARPLT_MAIN: "PM25",
    },
  ];

  function print_MVL_safe(n){
    let check = {} 
    console.log("미세먼지가 적은 도시 출력")
    for(i = 0; i<length(mise_list);i++){
        check = mise_list[i];
        if(check.IDEX_MVL<n){
            console.log(check.MSRSTE_NM)
            console.log(check.IDEX_MVL)
        }
    }
  }

  print_MVL_safe(50)