var btn = document.getElementById('root');
btn.addEventListener('click', function(event) {
    if(event.target.tagName.toLowerCase() === 'button' ) {
        console.log(event.target);
        event.target.innerText = "被點了";
    }
});

const MultiButton = (num) => { 
    var output = []
    for(let i = 0; i < num; i++) {
        output.push(<button> 第{i+1}個按鈕 </button>)
    }
    return output;
}

export default MultiButton;