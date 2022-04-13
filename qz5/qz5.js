// var myList = document.getElementById('myList');
// myList.addEventListener('click', function(e) {
//   if ( e.target.tagName.toLowerCase() === 'li' ) {
//     console.log(e.target.textContent);
//   }
// }, false);
// var newList = document.createElement('li');
// var textNode = document.createTextNode("hello cgu!");
// newList.appendChild(textNode);
// myList.appendChild(newList);

$(document).ready(function(){
    $("#myList").append($("<li>hello cgu!</li>"));
    $("li").click(function(e) {
        console.log(e.target.textContent);
    })
}, false);