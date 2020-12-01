import React from "react";
import "./App.css";

class todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      value: "",
      edit_value: "",
    };
  }
  addTodo = () => {
    let obj = { title: this.state.value, edit: false };
    this.setState({
      todo: [...this.state.todo, obj],
      value: "",
    });
  };
  deleteItem = (v, i) => {
    this.state.todo.splice(i, 1);
    this.setState({
      todo: this.state.todo,
    });
  };
  editItem = (e, i) => {
    console.log(e);

    this.state.todo[i].edit = true;
    this.setState({
      todo: this.state.todo,
    });
  };
  handleChange = (e, i) => {
    this.state.todo[i].title = e.target.value;
    this.setState({
      todo: this.state.todo,
    });
  };
  updateItem = (v, i) => {
    this.state.todo[i].edit = false;
    this.setState({
      todo: this.state.todo,
    });
  };
  delAll = () => {
    this.state.todo = [];
    this.setState({
      todo: this.state.todo,
    });
  };
  render() {
    let { todo, value } = this.state;
    return (
      <div className="container">
        <input
          type="text"
          placeholder="Enter Item"
          value={value}
          className="mainInput"
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        />
        <button onClick={this.addTodo}>Add Item</button>
        <button onClick={this.delAll}>Delete All</button>
        <ul>
          {this.state.todo.map((v, i) => {
            return (
              <li key={i}>
                {v.edit ? (
                  <input
                    type="text"
                    value={v.title}
                    onChange={(e) => this.handleChange(e, i)}
                  />
                ) : (
                  v.title
                )}
                <section>
                  {v.edit ? (
                    <button onClick={() => this.updateItem(v.title, i)}>
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={(e) => this.editItem(e, i)}
                      // style={{ order: "1" }}
                    >
                      Edit Item
                    </button>
                  )}
                  <button
                    onClick={() => this.deleteItem(v.title, i)}
                    // style={{ order: "2" }}
                  >
                    Delete
                  </button>
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default todo;
