import * as React from 'react'

const divStyle = {
  border: "1px solid black",
  height: "400px",
  width: "300px",
  margin: "20px auto"
}
const formStyle = {
  margin: "10px auto"
}
const ulStyle = {
  textAlign: "left"
}
const liStyle = {
  border: "1px solid gray",
  width: "220px",
  listStyle: "none"
}
const btnStyle = {
  border: "none",
  backgroundColor: "white",
  height: "20px",
  width: "20px",
  float: "right",
  color: "gray"
}

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      itemList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.state.itemList.push(this.state.value);
    this.setState({ value: '', itemList: this.state.itemList, });
    event.preventDefault();
  }
  // handleDelete(index) {
  //   this.state.itemList.splice(index, 1)
  //   this.setState({ value: '', itemList: this.state.itemList, });
  // }
  delTodo = index => {
    // const list2 = [...this.state.todoList];
    // list2.splice(index, 1);
    // this.setState({ todoList: list2 });
    this.state.itemList.splice(index, 1)
    this.setState({ value: '', itemList: this.state.itemList, });
  };

  render() {
    return (
      <div style={divStyle}>
        <center>
          <form style={formStyle} onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="add a new todo..." />
            </label>
            <input type="submit" value="Add" />
          </form>
        </center>
        <ul style={ulStyle}>
          {this.state.itemList.map((item, index) =>
            <li style={liStyle} key={index}>
              <input type="checkbox" key={index} />
              {item}
              {/* <button onClick={this.handleDelete}>X</button> */}
              <button style={btnStyle} key={index} id={index} onClick={() => this.delTodo(index)}>X</button>
            </li>
          )}
        </ul>
      </div >
    );
  }
}