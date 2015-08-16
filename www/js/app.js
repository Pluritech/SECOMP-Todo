// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('SecompTodo', ['ionic', 'ui.router'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})


.config(function ($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/main.html',
			controller: 'AppCtrl'
		})

		.state('app.tarefas', {
			url: '/tarefas',
			views: {
				'content': {
					templateUrl: 'templates/tarefas.html',
					controller: 'TarefasCtrl'
				}
			}
		})

		.state('app.criar-tarefa', {
			url: '/criar-tarefas',
			views: {
				'content': {
					templateUrl: 'templates/criar-tarefas.html',
					controller: 'CriarTarefasCtrl'
				}
			}
		})
	;

	$urlRouterProvider.otherwise('/app/tarefas');

});