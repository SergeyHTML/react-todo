var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function () {
    var strindTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(strindTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  }
};