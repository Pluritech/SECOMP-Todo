angular.module('SecompTodo')

	.factory('Tarefas', function () {

		var tarefas = [];

		return {
			getTarefas: function () {
				return tarefas;
			},

			criarTarefa: function (tarefa) {
				tarefas.push(tarefa);
			}
		};
	});
