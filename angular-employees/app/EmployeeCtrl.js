const app = angular.module("EmployeeMgmt", []);

app.controller("EmployeeCtrl", function ($scope, $http) {
    $scope.newEmployee = {};
    $scope.addEmployee = function () {
        let newEmployee = {
            "firstName": $scope.newEmployee.firstName,
            "lastName": $scope.newEmployee.lastName,
            "employmentStart": Date.now(),
            "employmentEnd": "firebaseiswierdaboutnull",
            "photo": $scope.newEmployee.photo
        }
        debugger
        $http.post("https://employees-3a3ff.firebaseio.com/.json", JSON.stringify(newEmployee)).then(getEmployees)
        $scope.newEmployee.firstName = $scope.newEmployee.lastName = ""
    };
    $scope.eraseEmployee = function (employee, key) {
        $http.delete(`https://employees-3a3ff.firebaseio.com/${key}/.json`, employee).then(getEmployees)
    };
    $scope.employees = [];
    getEmployees = function () {
        $http.get("https://employees-3a3ff.firebaseio.com/.json").then(
            function (response) {
                $scope.employees = response.data
            }
        )
    };
    $scope.fireEmployee = function (employee, key) {
        employee.employmentEnd = Date.now();
        $http.put(`https://employees-3a3ff.firebaseio.com/${key}/.json`, employee)
    };
    getEmployees()
});