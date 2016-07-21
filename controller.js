angular.module("app")
  .controller("mainController",["$scope", "mainService", function($scope, mainService){

      //when controller loads, we get our user Preference object from the server;
      $scope.UserPrefences = mainService.getPrefs();


      //this saves our object to the server with our current values that changed on our model
      $scope.logObj = function(){
        mainService.updatePreferences($scope.UserPrefences);
      };


      //these toggle and change our values of our user preference model/object
      $scope.turnOffTech = function(){
        $scope.UserPrefences.technology = false;
      };

      $scope.turnOnTech = function(){
        $scope.UserPrefences.technology = true;
      };
      $scope.turnOffBus = function(){
        $scope.UserPrefences.business = false;
      };

      $scope.turnOnBus = function(){
        $scope.UserPrefences.business = true;
      };

  }]);
