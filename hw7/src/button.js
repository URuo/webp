const style = {
    marginTop: "50px",
    width: "60%",
    float: "right"
}
const style1 = {
    height:"30px",
    width:"100px",
    border: "1px solid CornflowerBlue"
}
const Button = () => {
    return(
        <article style={style}>
            <h3>
                <button id="btn" style={style1}>登入</button>
            </h3>
        </article>
    )
}
export default Button