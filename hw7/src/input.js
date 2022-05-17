const style = {
    width: "60%",
    float: "left"
}
const style1 = {
    height:"20.5px",
    width:"150px",
    marginTop: "18.72px",
    border: "1px solid CornflowerBlue"
}
const Input = () => {
    return(
        <article style={style}>
            <input style={style1}></input>
            <input style={style1} type={"password"}></input>
        </article>
    )
}
export default Input
