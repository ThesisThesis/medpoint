// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

//     .state('app.map', {
//   url: '/map',
//   views: {
//     'menuContent': {
//       templateUrl: 'templates/map.html',
//       controller: 'MapController'
//     }
//   }
// })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.newsfeed', {
    url: '/newsfeed',
    views: {
      'menuContent': {
        templateUrl: 'templates/newsfeed.html'
      }
    }
  })

  .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html'
        }
      }
    })

    .state('app.pharmacy', {
      url: '/pharmacy',
      views: {
        'menuContent': {
          templateUrl: 'templates/pharmacy.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

     .state('app.medicines', {
      url: '/medicines',
      views: {
        'menuContent': {
          templateUrl: 'templates/medicines.html',
          controller: 'MedCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/medicines/:medId',
    views: {
      'menuContent': {
        templateUrl: 'templates/medicine.html',
        controller: 'MedsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/newsfeed');
});

