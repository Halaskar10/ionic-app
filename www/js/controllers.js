angular.module('starter.controllers', [])

  .controller('LoginCtrl', function ($state, $scope, $timeout, $http) {

    // girilen login bilgileri tutulacak
    $scope.postData = {};

    //database ile giriş
    $scope.login = function () {
      console.log("Giriş yapılıyor.", $scope.postData);


      // $http.get('link' + $scope.loginData.email + +$scope.loginData.password).success(function (data) {
      //   console.log(data[0].email + 'kullanıcısı giriş yaptı');
      //   $scope.user = data[0];
      //   $scope.loginState = true;
      // })
      alert("Login Succesful");
      $state.go('tab.dash');

      // $http.post('http://login_URL',postData).success(function(data){
      //   alert("Login Succesful")
      //   $state.go('tabs');        
      // })
      // .error(function(data){
      //   alert("ERROR");
      // });

    };
  })

  .controller('SmsCtrl',function($scope){})

  .controller('SifreCtrl',function($scope){})


  .controller('RegisterCtrl', function ($scope, $ionicModal, $timeout, $http) {

    $scope.registerData = {};

    // $http.post('link'+)  devam edilecek
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
