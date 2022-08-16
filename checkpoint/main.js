console.info("findEven('Nhap so o day')")
function findEven(number) {
    var result = [];
    for (var i = 4; i <= number; i++) {
        if (i % 2 == 0) {
            result.push(i);
        }
    }
    return result;
}

function numberOneTriangle() {
    var result = [];
    for (var i = 1; i <= 5; i++) {
        result.push(i);
    }
    return result;

}

let div_num = document.getElementById("number");
for(let i = 0; i < 6; i++){
    for(let j = 0; j < i; j++){
        div_num.innerHTML += 1;
    }
    div_num.innerHTML += "<br>";
}
const currentTime = () => {
    const el = document.getElementById("time");
    
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;
    
    let time = `${hh}:${mm}:${ss}`;
    
    el.innerHTML = time;
  };
  
  currentTime();
  setInterval(currentTime, 1000);