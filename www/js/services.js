angular.module('SecompTodo')

	.factory('Tarefas', function () {

		var tarefas = [];

		return {
			criarTarefa: function (tarefa) {
				tarefas.push(tarefa);
			}
		};
	});
