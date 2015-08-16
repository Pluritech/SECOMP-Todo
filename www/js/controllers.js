angular.module('SecompTodo')

	.controller('AppCtrl', function ($scope) {

	})
	
	.controller('TarefasCtrl', function ($scope, Tarefas) {

		$scope.tarefas = Tarefas.getTarefas();

		$scope.concluirTarefa = function (tarefa) {
			Tarefas.concluirTarefa(tarefa);
		};
	
	})

	.controller('CriarTarefasCtrl', function ($scope, $state, Tarefas) {
		
		$scope.tarefa = {
			nome: '',
			prioridade: 'Normal'
		};

		$scope.criarTarefa = function () {
			Tarefas.criarTarefa($scope.tarefa);
			$state.go('app.tarefas');
		};
	})

	;
