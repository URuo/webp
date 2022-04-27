// var dataURL = "https://cors-anywhere.herokuapp.com/https://wic.heo.taipei/OpenData/API/Rain/Get?StationNo=&loginId=open_rain&dataKey=85452C1D";
// var data = $.getJSON(dataURL);

var data = '{ "count":5, "data": [' +
    '{ "stationNo":"C0AD1", "stationName":"八里", "recTime":"202204271540", "rain":0.0 },' + 
    '{"stationNo":"C0AD0", "stationName":"三芝", "recTime":"202204271540", "rain":0.0},' +
    '{"stationNo":"C0AD4", "stationName":"土城", "recTime":"202204271540", "rain":0.0},' +
    '{"stationNo":"318", "stationName":"大安福州山", "recTime":"202204271502", "rain":0.0},' +
    '{"stationNo":"01A17", "stationName":"坪林", "recTime":"201911130140", "rain":0.0} ]}';

var obj = JSON.parse(data);

for(var i = 1; i <= 5; i++) {
    var str = obj.data[i].recTime;
    var year = str.substring(0, 4);
    var month = str.substring(4, 6);
    var date = str.substring(6, 8);
    var hour = str.substring(8, 10);
    var min = str.substring(10, 12);
    $('body').append($('<h2>' + obj.data[i].stationName + '(' + obj.data[i].stationNo + ')' + '</h2>'))
    $('body').append($('<h3>' + year + '年' + month + '月' + date + '號' + hour + '點' + min + '分</h3>'))
    $('body').append($('<h3>即時雨量' + obj.data[i].rain + '</h3>'))
}