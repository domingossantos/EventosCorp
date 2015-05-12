// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js


angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

      .state('app.eventos', {
        url: "/eventos",
        views: {
          'menuContent': {
            templateUrl: "templates/evento/eventos.html",
            controller: "EventoCtrl"
          }
        }
      })

      .state('app.evento', {
        url: "/eventos/:eventoId",
        views: {
          'menuContent': {
            templateUrl: "templates/evento/evento.html",
            controller: 'EventoCtrl'
          }
        }
      })

      .state('app.novoevento', {
        url: "/novoevento",
        views: {
          'menuContent': {
            templateUrl: "templates/evento/evento_form.html",
            controller: 'EventoCtrl'
          }
        }
      })

      .state('app.convidado-lista', {
        url: "/convidado-lista/:eventoId",
        views: {
          'menuContent': {
            templateUrl: "templates/evento/lista-convidados.html",
            controller: 'EventoCtrl'
          }
        }
      })

      .state('app.pesquisaEvento', {
        url: "/pesquisaEvento",
        views: {
          'menuContent': {
            templateUrl: "templates/evento/pesquisa.html",
            controller: 'EventoCtrl'
          }
        }
      });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/eventos');
});
