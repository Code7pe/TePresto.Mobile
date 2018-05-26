angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, $http) {
    // Form data for the login modal
    $scope.loginData = {};
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    $scope.btnLogin = function (loginData) {
      var user = loginData.username;
      var password = loginData.password;
      if (user === 'admin' && password === '123') {
        $state.go('app.prestamista');
      } else {
        $state.go('app.inicio');
      }
    };

    $scope.btnPrestamista = function () {
      $state.go('app.prestamista');
    };

    $scope.btnCrearPrestamista = function (prestamista) {
      var objectData = {
        'nombre': prestamista.nombre,
        'apellido': prestamista.apellido,
        'correo': prestamista.correo,
        'clave': prestamista.clave
      };

      $http({
        method: 'GET',
        url: '/someUrl',
        data: objectData
      }).then(function (response) {

      }, function error(response) {
      });

    };

    $scope.btnCliente = function () {
      $state.go('app.cliente');
    };

    $scope.btnCrearCliente = function (cliente) {
      var objectData = {
        'nombre': cliente.nombre,
        'apellido': cliente.apellidos,
        'correo': cliente.correo,
        'clave': cliente.clave
      };

      $http({
        method: 'POST',
        url: 'http://sdkpalestra.com/code7/tepresto/api/registrarCliente',
        data: objectData
      }).then(function (response) {
        console.log('entro');
      }, function error(response) {
      });
      $state.go('app.cliente-informacion1');

    };


    $scope.btnRegistarCliente = function () {
      $state.go('app.registrar-cliente');
    };




    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);


      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  });
