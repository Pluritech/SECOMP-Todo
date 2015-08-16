angular.module('SecompTodo')

	.factory('Tarefas', function () {

		var tarefas = [];
		var TAREFAS_KEY = 'TAREFAS_KEY';

		function salvarLista() {
			localStorage.setItem(TAREFAS_KEY, JSON.stringify(tarefas));
		};

		var listaSalva = localStorage.getItem(TAREFAS_KEY);
		if (listaSalva) {
			try {
				tarefas = JSON.parse(listaSalva);
			} catch (erro) {
				tarefas = [];
			}
		}

		return {
			getTarefas: function () {
				return tarefas;
			},

			criarTarefa: function (tarefa) {
				tarefas.push(tarefa);
				salvarLista();
			},

			concluirTarefa: function (tarefa) {
				tarefa.concluida = true;
				salvarLista();
			}
		};
	});
