angular.module("EmployeeApp")
    .controller("AuthCtrl", function ($scope, $location, $timeout, AuthFactory) {
        $scope.auth = {}

        $scope.logMeIn = function (credentials) {
            AuthFactory.authenticate(credentials).then(function (didLogin) {
                $scope.auth.email = {}
                $scope.auth.password = {}
                $timeout(() => {
                    $location.path("/employees/list")
                }, 100)
            })
        }

        $scope.registerUser = function (registerNewUser) {
            AuthFactory.registerWithEmail(registerNewUser).then(function (didRegister) {
                $scope.logMeIn(registerNewUser)
            })
        }

        $scope.logoutUser = function () {
            AuthFactory.logout()
            $location.url('/auth')
        }

    })