app.controller('LoginController', function ($scope, $state, $ionicPopup, AuthService, REGIONS, USERS) {
    $scope.regions = REGIONS;

    $scope.users = USERS;

    // AC1003 @p5Zq8@
    // 8 PC1738 @p2Oh6@
    // PC1979 @p7Xb1@
    $scope.user = {};
    // $scope.user.region = 104;
    // $scope.user.AC_PC = 0;

    $scope.data = {};

    // Nếu đã đăng nhập rồi thì chuyển sang trang home
    if (AuthService.isAuthenticated()) {
        $state.go("tabs.survey");
    }

    $scope.login = function (userdata) {
        AuthService.login($scope.user).then(function (response) {
            $state.go('tabs.survey', {}, { reload: true });
        },
         function (err) {
             var alertPopup = $ionicPopup.alert({
                 title: 'Đăng nhập thất bại!',
                 template: err.toString()
             });
         });

        //AuthService.login(userdata).then(function (authenticated) {
        //    $state.go('tabs.survey', {}, { reload: true });
        //    // $scope.setCurrentUsername(data.username);
        //}, function (err) {
        //    var alertPopup = $ionicPopup.alert({
        //        title: 'Đăng nhập thất bại!',
        //        template: 'Vui lòng kiểm tra lại!'
        //    });
        //});
    };
});