angular
.module("EmployeeApp")
.controller("EmployeeDetailCtrl",
    function ($scope, $routeParams,EmployeeFactory, $location) {
        $scope.eraseEmployee = function () {
            EmployeeFactory.delete($routeParams.employeeId).then(
                $location.url("/")
            )
        }
        $scope.fireEmployee = function () {
            EmployeeFactory.fire($routeParams.employeeId).then(
                $location.url("/")
            )
        }
        $scope.employee = {}
        EmployeeFactory.single($routeParams.employeeId).then(employee => {
            $scope.employee = employee
        })
    }
)