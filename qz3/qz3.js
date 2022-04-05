const log = document.getElementById('demo');
document.addEventListener('keydown', logKey);
function logKey(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90 ||
        e.keyCode >= 96 && e.keyCode <= 105) {

        log.textContent += `${e.key}`;
    }
    switch(e.key){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            log.textContent += `${e.key}`
            break;
        default:;
    }
}