const log = document.getElementById('demo');
const test = document.getElementById('time');
document.addEventListener('keydown', logKey);

let start = new Date().getTime();

function randomString(length) {
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) 
        result += str[Math.floor(Math.random() * str.length)];
    return result;
} 

function logKey(e) {
    if (e.key == log.textContent.slice(-1)){
        log.textContent = log.textContent.replace(/.$/, '');
    }
    let end = new Date().getTime();
    let times = (end - start) / 1000;
    test.textContent = times;
    log.textContent = randomString(Math.round(times*2.5)).concat(log.textContent);
    start = end;
}
