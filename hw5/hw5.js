$(document).ready(function() {
    for (var i = 2; i <= 21; i++) {
        $('#station').append($('<p>A' + i + '</p>'))
    }
})

const runtimeURL = 'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON';
const runtimes = $.getJSON(runtimeURL);
var num = [];
var b = 0;
var c = 20;
for(var j = 0; j <= 21; j++) {
    if(c>0) {
        num.push(b)
        b = b + c
        c--
    }
}
runtimes.done(function(time) {
    $.each(time, function(i, item) {
        console.log(i);
        if(i < 1) {
            $.each(num, function(x,num){
                console.log(x);
                console.log(num);
                $('#runtime').append($('<p id = test' + x + '>' + item.TravelTimes[num].RunTime/60 + ' 分鐘 </p>'))
            })
        }
            
    });
});

var priceURL = "https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=30&%24format=JSON"
var prices = $.getJSON(priceURL)
prices.done(function(price) {
    $.each(price, function(i, item) {
        if(i < 20) {
            $('#price').append($('<p>' + item.Fares[0].Price + ' 元</p>'))
        }
    })
});