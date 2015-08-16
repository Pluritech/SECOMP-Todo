angular.module('SecompTodo')

	.filter('tarefas', function () {
		return function (tarefas, filtros) {
			var tarefasFiltradas = [];

			for (var t in tarefas) {
				tarefa = tarefas[t];

				switch (filtros.mostrar) {
					case 'A fazer':
						if (!tarefa.concluida) {
							tarefasFiltradas.push(tarefa);
						}
						break;
					case 'Concluídas':
						if (tarefa.concluida) {
							tarefasFiltradas.push(tarefa);
						}
						break;
					default: 
						tarefasFiltradas.push(tarefa);
						break;
				}

			}

			switch (filtros.ordenacao) {
				case 'A fazer':
					tarefasFiltradas.sort(function (tarefa1, tarefa2) {
						if (tarefa1.concluida) {
							return 1;
						}
						return -1;
					});
					break;
				case 'Prioridade':
					tarefasFiltradas.sort(function (tarefa1, tarefa2) {
						if (tarefa1.prioridade === 'Alta') {
							return -1;
						}
						if (tarefa1.prioridade === 'Normal' && tarefa2.prioridade !== 'Alta') {
							return -1;
						}
						if (tarefa1.prioridade === 'Baixa' && tarefa2.prioridade !== 'Alta' && tarefa2.prioridade !== 'Normal') {
							return -1;
						}
						return 1;
					});
					break;
			}

			return tarefasFiltradas;
		};
	});
