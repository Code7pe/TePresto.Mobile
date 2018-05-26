// Ionic Starter App

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.inicio', {
    url: '/inicio',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio.html'
      }
    }
  })

  .state('app.prestamista', {
      url: '/prestamista',
      views: {
        'menuContent': {
          templateUrl: 'templates/prestamista.html'
        }
      }
    })
    .state('app.cliente', {
      url: '/cliente',
      views: {
        'menuContent': {
          templateUrl: 'templates/cliente.html'
        }
      }
    })
    .state('app.registrar-cliente', {
      url: '/registrar-cliente',
      views: {
        'menuContent': {
          templateUrl: 'templates/registrar-cliente.html'
        }
      }
    })
    .state('app.cliente-informacion1', {
      url: '/cliente-informacion',
      views: {
        'menuContent': {
          templateUrl: 'templates/cliente-informacion1.html'
        }
      }
    })
    .state('app.cliente-informacion2', {
      url: '/cliente-informacion',
      views: {
        'menuContent': {
          templateUrl: 'templates/cliente-informacion2.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/app/inicio');
});
