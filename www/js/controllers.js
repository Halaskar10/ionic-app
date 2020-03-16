angular.module('starter.controllers', [])

  .controller('LoginCtrl', function ($scope, $ionicModal, $timeout, $http) {

      // girilen login bilgileri tutulacak
      $scope.loginData = {};
      // $scope.loginState;

      //gerekli değil
      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
      }).then(function (modal) {
        $scope.modal = modal;
      });


      //database ile giriş
      $scope.login = function () {
        console.log("Giriş yapılıyor.", $scope.loginData);


        $http.get('link' + $scope.loginData.username + +$scope.loginData.password).success(function (data) {
          console.log(data[0].username + 'kullanıcısı giriş yaptı');
          $scope.user = data[0];
          $scope.loginState = true;
        })

      };
  })

    .controller('DashCtrl', function ($scope) {})

    .controller('ChatsCtrl', function ($scope, Chats) {


      $scope.chats = Chats.all();
      $scope.remove = function (chat) {
        Chats.remove(chat);
      };
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function ($scope) {
      $scope.settings = {
        enableFriends: true
      };
    });
