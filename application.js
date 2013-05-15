function TodoCtrl($scope) {

    $scope.lists = [{
        list_name: 'private',
        todos: [{
            todo_name: 'clean the house',
            	todo_attributes: [{
                	priority: '1'},{
					done: 'true'}]}, {
            todo_name: 'watch TV',
            	todo_attributes: [{
                	priority: '2'},{
					done: 'false'}]
				}]}, {
        list_name: 'work',
        todos: [{
            todo_name: 'work hard on all my tasks',
				todo_attributes: [{
                	priority: '3'},{
					done: 'false'}]
					}]}];


  
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });

}
}

