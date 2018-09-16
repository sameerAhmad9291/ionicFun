angular.module('starter').run(['$rootScope', '$ionicLoading', '$ionicPopup', '$timeout', 
	function ($rootScope, $ionicLoading, $ionicPopup, $timeout) {
		
            var stopLoading = function($timeout, $ionicLoading){
				var loader = $ionicLoading;
				$timeout(function(){
						loader.hide();
					}, 2000);
			};
			
			$rootScope.$on('$stateChangeStart', function () {
                $ionicLoading.show({
                    template: '<ion-spinner class="spinner-energized" icon="spiral"></ion-spinner>'
                });
            });
            $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams, options) {
					stopLoading($timeout, $ionicLoading);
                }
            );
            $rootScope.$on('$stateChangeError',
                function (event, toState, toParams, fromState, fromParams, error) {
                   stopLoading($timeout, $ionicLoading);
                }
            );
            $rootScope.$on('$stateNotFound',
                function (event, unfoundState, fromState, fromParams) {
                    stopLoading($timeout, $ionicLoading);
                }
            );
        }])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })

    .state('app.dashboard', {
        url: '/dashboard',
        views: {
            'menuContent': {
                templateUrl: 'templates/dashboard.html',
                controller: 'DashboardController'
            }
        }
    })

   .state('app.analytics', {
       url: '/analytics',
       views: {
           'menuContent': {
               templateUrl: 'templates/analytics.html',
               controller: 'AnalyticsController'
           }
       }
   })

    .state('app.users', {
        url: '/users',
        views: {
            'menuContent': {
                templateUrl: 'templates/users.html',
                controller: 'UsersController'
            }
        }
    })
        .state('app.settings', {
            url: '/settings',
            views: {
                'menuContent': {
                    templateUrl: 'templates/settings.html',
                    controller: 'SettingsController'
                }
            }
        });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');
});
