// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        // Login
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    })

      .state('tabs', {
          url: "/tab",
          abstract: true,
          templateUrl: "templates/tabs.html",
          controller: "SurveyController"
      })
      .state('tabs.survey', {
          url: "/survey",
          views: {
              'survey-tab': {
                  templateUrl: "templates/add-survey.html",
                  controller: 'SurveyController'
              }
          }
      })
      .state('tabs.newsurvey', {
          url: "/newsurvey",
          views: {
              'survey-tab': {
                  templateUrl: "templates/new-survey.html",
                  controller: 'SurveyController'
              }
          }
      })
      .state('tabs.sales-heo', {
          url: "/sales-heo",
          views: {
              'survey-tab': {
                  templateUrl: "templates/add-survey-sales-heo.html",
                  controller: 'UpdateHeoController'
              }
          }
      })
        .state('tabs.sales-ga', {
            url: "/sales-ga",
            views: {
                'survey-tab': {
                    templateUrl: "templates/add-survey-sales-ga.html",
                    controller: 'SurveyController'
                }
            }
        })
        .state('tabs.sales-vit', {
            url: "/sales-vit",
            views: {
                'survey-tab': {
                    templateUrl: "templates/add-survey-sales-vit.html",
                    controller: 'SurveyController'
                }
            }
        })
        .state('tabs.sales-bo', {
            url: "/sales-bo",
            views: {
                'survey-tab': {
                    templateUrl: "templates/add-survey-sales-bo.html",
                    controller: 'SurveyController'
                }
            }
        })
        .state('tabs.sales-giacam', {
            url: "/sales-giacam",
            views: {
                'survey-tab': {
                    templateUrl: "templates/add-survey-sales-giacam.html",
                    controller: 'SurveyController'
                }
            }
        })
      .state('tabs.dealers', {
          url: "/dealers",
          views: {
              'dealers-tab': {
                  templateUrl: "templates/list-dealer.html",
                  controller: 'DealerController'
              }
          }
      })

      .state('tabs.dealer-detail', {
          url: '/dealers/:SurveyId',
          views: {
              'dealers-tab': {
                  templateUrl: 'templates/dealer-detail.html',
                  controller: 'DealerController'
              }
          }
      })

        .state('tabs.dealer-detail-sales-heo', {
            url: '/dealer-detail-sales-heo',
            views: {
                'dealers-tab': {
                    templateUrl: 'templates/dealer-detail-sales-heo.html',
                    controller: 'DealerController'
                }
            }
        })

        .state('tabs.dealer-detail-sales-ga', {
            url: '/dealer-detail-sales-ga',
            views: {
                'dealers-tab': {
                    templateUrl: 'templates/dealer-detail-sales-ga.html',
                    controller: 'UpdateGaController'
                }
            }
        })

        .state('tabs.dealer-detail-sales-vit', {
            url: '/dealer-detail-sales-vit',
            views: {
                'dealers-tab': {
                    templateUrl: 'templates/dealer-detail-sales-vit.html',
                    controller: 'UpdateVitController'
                }
            }
        })

        .state('tabs.dealer-detail-sales-bo', {
            url: '/dealer-detail-sales-bo',
            views: {
                'dealers-tab': {
                    templateUrl: 'templates/dealer-detail-sales-bo.html',
                    controller: 'UpdateBoController'
                }
            }
        })

        .state('tabs.dealer-detail-sales-giacam', {
            url: '/dealer-detail-sales-giacam',
            views: {
                'dealers-tab': {
                    templateUrl: 'templates/dealer-detail-sales-giacam.html',
                    controller: 'UpdateGiacamController'
                }
            }
        })

      .state('tabs.navstack', {
          url: "/navstack",
          views: {
              'dealers-tab': {
                  templateUrl: "templates/nav-stack.html"
              }
          }
      })
      .state('tabs.account', {
          url: "/account",
          views: {
              'account-tab': {
                  templateUrl: "templates/account.html",
                  controller: 'AccountController'
              }
          }
      });


    // if none of the above states are matched, use this as the fallback
    // $urlRouterProvider.otherwise('/home/add-servey');
    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("tabs.survey");
    });

})
.run(function ($rootScope, $state, AuthService, AUTH_EVENTS) {
    $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {

        if (!AuthService.isAuthenticated()) {
            if (next.name !== 'login') {
                event.preventDefault();
                $state.go('login');
            }
        }
    });
})

.controller('HomeTabCtrl', function ($scope) {
    console.log('HomeTabCtrl');
});

