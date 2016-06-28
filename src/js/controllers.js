angular.module('app.controllers', [])

.controller('homeCtrl', function($scope, $cordovaBarcodeScanner) {

  $scope.scan = function(){
    document.addEventListener("deviceready", function () {
      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          // Success! Barcode data is here
          alert(barcodeData.text)
        }, function(error) {
          // An error occurred
        })
    }, false)
  }
})

.controller('myServicesCtrl', function($scope) {
})

.controller('discoverCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})
