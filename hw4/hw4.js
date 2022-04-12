let str = [];
const text = document.getElementById('time');
$(document).ready(function(){
    for (var i = 0; i < 6; i++) {
        str[i] = "";
    }
    let start = new Date().getTime();
    let interval;
    interval = window.setInterval(function(){
        $("img").animate({ left: "+=20" }, 500);
        if ($("img").last().offset().left > 1200) {
            $("img").stop(true);
            clearInterval(interval);
            window.alert("Game over");
        }
    }, 200);
    $(document).keydown(function (e) {
        let end = new Date().getTime();
        let times = (end - start) / 1000;
        text.textContent = times;
        for(let j = 0; j < times*1.5; j++){
            newConcat();
        }
        start = end;
        for (let i = 1; i <= 6; i++) {
            if (e.key == str[i].slice(-1)) {
                $("#track" + i + " img").last().remove();
                str[i] = str[i].replace(/.$/, '');
                break;
            }
        }
    })
})

function randomStr(i) {
    let ascii = Math.floor(Math.random()*26+65);
    let char = String.fromCodePoint(ascii);
    console.log(ascii);
    console.log(char);
    str[i] = char + str[i];
    return char;
}

function newConcat(){
    $("#track1").prepend('<img src ="ABC/' + randomStr(1) + '.jpg" />');
    $("#track2").prepend('<img src ="ABC/' + randomStr(2) + '.jpg" />');
    $("#track3").prepend('<img src ="ABC/' + randomStr(3) + '.jpg" />');
    $("#track4").prepend('<img src ="ABC/' + randomStr(4) + '.jpg" />');
    $("#track5").prepend('<img src ="ABC/' + randomStr(5) + '.jpg" />');
    $("#track6").prepend('<img src ="ABC/' + randomStr(6) + '.jpg" />');
}