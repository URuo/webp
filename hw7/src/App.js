// import logo from './logo.svg';
import './App.css';
import Button from './button';
import Title from './title';
import Input from './input';
import Text from './text';

const style = {
    border:"2px solid CornflowerBlue",
    height:"340px",
    width:"300px",
    margin:"50px auto"
}
var btn = document.getElementById('root');
btn.addEventListener('click', function(event) {
    if(event.target.tagName.toLowerCase() === 'button' ) {
        window.alert("登入");
    }
});
function App() {
    return (
        <div className="App" style={style}>
            <Title></Title>
            <Text></Text>
            <Input></Input>
            <Button></Button>
        </div>
    );
}

export default App;
