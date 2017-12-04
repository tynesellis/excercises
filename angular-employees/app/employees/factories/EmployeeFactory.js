angular
    .module("EmployeeApp")
    .factory("EmployeeFactory", function ($http) {
        return Object.create(null, {
            "list": {
                value: function () {
                    return $http({
                        method: "GET",
                        url: "https://employees-3a3ff.firebaseio.com/employees/.json"
                    }).then(response => {
                        const data = response.data

                        // Make an array of objects so we can use filters
                        return Object.keys(data).map(key => {
                            data[key].id = key
                            return data[key]
                        })
                    })
                }
            },
            "add": {
                value: function (employee) {
                    return $http({
                        method: "POST",
                        url: "https://employees-3a3ff.firebaseio.com/employees/.json",
                        data: {
                            "firstName": employee.firstName,
                            "lastName": employee.lastName,
                            "employmentStart": Date.now(),
                            "employmentEnd": 0
                        }
                    })
                }
            },
            "single": {
                value: function (key) {
                    return $http({
                        method: "GET",
                        url: `https://employees-3a3ff.firebaseio.com/employees/${key}/.json`
                    }).then(response => response.data)
                }
            },
            "delete": {
                value: function (key) {
                    return $http({
                        method: "DELETE",
                        url: `https://employees-3a3ff.firebaseio.com/employees/${key}.json`,
                    })
                }
            },
            "fire": {
                value: function (key) {
                    return $http({
                        method: "PUT",
                        url: `https://employees-3a3ff.firebaseio.com/employees/${key}/employmentEnd.json`,
                        data: Date.now()
                    })
                }
            }
        })
    })