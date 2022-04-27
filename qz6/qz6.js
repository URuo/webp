setInterval(function() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    document.getElementById("p").innerHTML = hour + " : " + min + " : " + sec;
}, 1000);