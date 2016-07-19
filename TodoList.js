import React from 'react'
import ReactMixin from 'react-mixin'
import ReactLocalStorageMixin from 'react-localstorage'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.getInput = this.getInput.bind(this)
    this.captureKey = this.captureKey.bind(this)
    this.state = {
      todoItems: [],
      value: ''
    }
  }

  render() {
    var todoItems = this.state.todoItems.map((todoItem, i) => {
      return <TodoItem key={i}>{todoItem}</TodoItem>
    })

    return <div>
      <input value={this.state.value} onKeyPress={this.captureKey} onChange={this.getInput}/>
      <ul>{todoItems}</ul>
    </div>
  }

  captureKey(e) {
    if (e.key === 'Enter') {
      var todoItems = this.state.todoItems
      todoItems.push(e.target.value)
      this.setState({value: '', todoItems: todoItems})
    }
  }

  getInput(e) {
    this.setState({value: e.target.value})
  }
}

var TodoItem = (props) => <li>{props.children}</li>

ReactMixin.onClass(TodoList, ReactLocalStorageMixin)

export default TodoList
