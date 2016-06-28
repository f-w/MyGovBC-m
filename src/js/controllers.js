export default angular.module('app.controllers', [])

  .controller('homeCtrl', function ($scope, $cordovaBarcodeScanner, $resource) {
    'ngInject'
    $scope.scan = function () {
      document.addEventListener("deviceready", function () {
        $cordovaBarcodeScanner
          .scan()
          .then(function (barcodeData) {
            // Success! Barcode data is here
            alert(barcodeData.text)
            let res = $resource('http://auth.api.dev.cos.citz.gov.bc.ca/api/authentication')
            res.save({
              "name": "Sam",
              "headers": {"sm_user": "Sam"},
              "sid": barcodeData.text
            }, function () {
            }, function (err) {
              alert('error!')
            })
          }, function (error) {
            // An error occurred
          })
      }, false)
    }
  })

  .controller('myServicesCtrl', function ($scope, $resource) {
    'ngInject'
  })

  .controller('discoverCtrl', function ($scope) {
    'ngInject'

  })

  .controller('settingsCtrl', function ($scope) {
    'ngInject'

  })
