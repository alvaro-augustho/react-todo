var React = require('react');

// Children need to specify which data they need
var {connect} = require('react-redux')

var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
      debugger;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

// Connect TodoList props to store
module.exports = connect(
    (state) => {
        return {
          todos: state.todos   
        };
    }
)(TodoList);
