angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  //.controller('PostCtrl', function($scope){
  $scope.addPost = function() {
    alert('Successfully Added!');
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  //  $scope.post = [];
  // $scope.addPost = function() {
  //   $scope.post.push({
  //     "title": $scope.post
  //   });
  //   alert('Successfully Added!');
  //   $scope.title = "";
  // };

})

.controller('MedCtrl', function($scope) {
  $scope.medicines = [
    { title: 'Alaxan Fr', id: 1 },
    { title: 'Ascorbic Acid', id: 2 },
    { title: 'Bisolvan', id: 3 },
    { title: 'Biogesic', id: 4 },
    { title: 'Buscopan', id: 5 },
    { title: 'Centrum', id: 6 },
    { title: 'Cherrifer', id: 7  },
    { title: 'Clusivol', id: 8 },
    { title: 'Constant', id: 9 },
    { title: 'Decolgen', id: 10 },
    { title: 'Dolfenal', id: 11 },
    { title: 'Dimecron', id: 12 },
    { title: 'Ferlin', id: 13 },
    { title: 'Growee', id: 14 },
    { title: 'Loperamide', id: 15 },
    { title: 'Neozep', id: 16 },
    { title: 'Pharmaton', id: 17 },
    { title: 'Propan TLC', id: 18 },
    { title: 'Stresstabs', id: 19 },
    { title: 'Tuseran', id: 20}
  ];
})

.controller('MedsCtrl', function($scope, $stateParams) {
})

 .controller('AddPostCtrl', function($scope) {
     $scope.posts = [
      { name: 'Lyrrech Wellz', date: 'June 7, 2015', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  ' },
      { name: 'Lyrrech Wellz', date: 'July 2, 2015', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  ' },
      { name: 'Lyrrech Wellz', date: 'August 14, 2015', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  ' },
      { name: 'Lyrrech Wellz', date: 'August 30, 2015', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  ' },
      { name: 'Lyrrech Wellz', date: 'September 22, 2015', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  ' },
      { name: 'Lyrrech Wellz', date: 'September 28, 2015', content: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum  ' },

  ];
})

 .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      //  function initialize() {

      //   var locations = [
      //       ['a', 8.484547, 124.650343],
      //       ['b', 8.484292, 124.656223]

      //   ];
      //   var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
      //   var mapOptions = {
      //     center: myLatlng,
      //     zoom: 16,
      //     mapTypeId: google.maps.MapTypeId.ROADMAP
      //   };
      //   var map = new google.maps.Map(document.getElementById("map"),
      //       mapOptions);
        
      //   //Marker + infowindow + angularjs compiled ng-click
      //   var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
      //   var compiled = $compile(contentString)($scope);

      //   var infowindow = new google.maps.InfoWindow({
      //     content: compiled[0]
      //   });

      //   var marker, i; 
      //   for (i = 0; i < locations.length; i++) { 
      // marker = new google.maps.Marker({
      //   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      //   map: map
      //   });

      //   google.maps.event.addListener(marker, 'click', (function(marker, i) {
      //       return function() {  
      //       infowindow.setContent(locations[i][0]);       
      //     infowindow.open(map,marker);
      //   }
      //   })(marker, i));
      // }

      //   $scope.map = map;
      // }
      // google.maps.event.addDomListener(window, 'load', initialize);
      
      // $scope.centerOnMe = function() {
      //   if(!$scope.map) {
      //     return;
      //   }

      //   $scope.loading = $ionicLoading.show({
      //     content: 'Getting current location...',
      //     showBackdrop: false
      //   });

      //   navigator.geolocation.getCurrentPosition(function(pos) {
      //     $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      //     $scope.loading.hide();
      //   }, function(error) {
      //     alert('Unable to get location: ' + error.message);
      //   });
      // };
      
      // $scope.clickTest = function() {
      //   alert('Example of infowindow with ng-click')
      // };
      
function initialize() {

        var locations = [
      ['Rose Pharmacy', 8.486287, 124.655836, 4],
      ['Rose Pharmacy 1', 8.484292, 124.656094, 5],
      ['Rose Pharmacy 2', 8.484929, 124.650601, 3],
      ['Rose Pharmacy 3', 8.486669, 124.650043, 2],
      ['Rose Pharmacy 4', 8.477671, 124.649528, 1]
    ];

      //  var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        // var mapOptions = {
        // //  center: myLatlng,
        //   zoom: 16,
        //   mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        var map = new google.maps.Map(document.getElementById("map"), {
             zoom: 16,
      center: new google.maps.LatLng(8.486839, 124.655879),
      mapTypeId: google.maps.MapTypeId.ROADMAP

        });
          
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

         for (i = 0; i < locations.length; i++) { 
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
         // title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map,marker);
        }
        })(marker, i));
        }

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      

    });