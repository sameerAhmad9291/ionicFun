angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.themeColors = ["#1d253b", "#886aea", "#444", "#387ef5"];

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

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('DashboardController', function ($scope) {

    initializeChartConfig();
    $scope.$broadcast('highchartsng.reflow');

    function initializeChartConfig() {

        var _chartConfig = {
            options: {
                chart: {
                    backgroundColor: '#394261',
                    type: 'pie',
                },
                dataLabels: { enabled: false },
                colors: ['#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b'],
                title: {
                    text: "Sales Breakdown",
                    style: { color: "#FFFFFF" }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    line: {
                        marker: {
                            enabled: false
                        }
                    },
                    area: {
                        marker: {
                            enabled: false
                        }
                    },
                    pie: {
                        dataLabels: {
                            distance: -30
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                yAxis: {
                    title: null,
                    labels: {
                        style: { color: "#FFFFFF" }
                    },
                },
                xAxis: {
                    labels: {
                        style: { color: "#FFFFFF" }
                    },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr']
                }
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2],
                size: '60%',
                innerSize: '20%',
            }]
        }

        $scope.chartConfig = _chartConfig;
    }

})

.controller('AnalyticsController', function ($scope) {

    initializeChartConfig();
    $scope.$broadcast('highchartsng.reflow');

    function initializeChartConfig() {

        var _chartConfig = {
            options: {
                chart: {
                    backgroundColor: '#394261',
                    type: 'column',
                    chartType: 'stock'
                },
                colors: ['#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b'],
                title: {
                    text: "Sales Breakdown",
                    style: { color: "#FFFFFF" }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    line: {
                        marker: {
                            enabled: false
                        }
                    },
                    area: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                credits: {
                    enabled: false
                },
                yAxis: {
                    title: null,
                    labels: {
                        style: { color: "#FFFFFF" }
                    },
                },
                xAxis: {
                    labels: {
                        style: { color: "#FFFFFF" }
                    },
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }, {
                type: 'spline',
                name: 'Average',
                color: "#2b908f",
                data: [25, 65, 110, 135, 140, 185, 160, 148.5, 216.4, 194.1, 95.6, 54.4],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }]
        }

        $scope.chartConfig = _chartConfig;
    }

})

.controller('UsersController', function ($scope) {
    $scope.searchKey = {
        title: ''
    };
    $scope.data = [
      { title: 'Aaron', id: 1 },
      { title: 'Blake', id: 2 },
      { title: 'Caldwell', id: 3 },
      { title: 'Padma', id: 4 },
      { title: 'Craig', id: 5 },
      { title: 'Palmira', id: 6 },
      { title: 'Brian', id: 7 },
      { title: 'Aiken', id: 8 },
      { title: 'Craigw', id: 9 },
      { title: 'Alwwmira', id: 10 },
      { title: 'Graig', id: 11 },
      { title: 'Kalmira', id: 12 },
      { title: 'Qrian', id: 13 },
      { title: 'Erian', id: 14 },
      { title: 'Wraig', id: 15 },
      { title: 'Yalmira', id: 16 },
      { title: 'Iraig', id: 17 },
      { title: 'Palmira', id: 18 },
      { title: 'Orian', id: 19 },
      { title: 'Brian', id: 20 }
    ];
})

.controller('SettingsController', function ($scope) {
    $scope.settingsList = [
    { text: "Wireless", checked: true },
    { text: "GPS", checked: false },
    { text: "Bluetooth", checked: false }
  ];
});