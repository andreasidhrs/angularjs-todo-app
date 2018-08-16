let app = angular.module("todoapp", []);

app.directive('onEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.onEnter, {'event': event});
                });
                event.preventDefault();
            }
        });
    };
});

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

app.controller('todocontroller', function($scope) {
    $scope.todos = [];
    $scope.todoInput;
    $scope.logo = 'rslogo.svg';
    $scope.title = 'Todo app';

    $scope.addTodo = function() {
        $scope.todos.push({
            body: $scope.todoInput,
            done: false
        });
        $scope.todoInput = '';
    }

    $scope.removeTodo = function(todo) {
        $scope.todos.splice($scope.todos.indexOf(todo), 1);
    }
});