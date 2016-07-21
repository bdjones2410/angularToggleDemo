angular.module("app")
  .factory("mainService", ["$http", function($http){

//define our functions and variables to be returned;

    //defines our userPreference object to return to the front end
    var userPref = {};


    //sends our updated userPref object to the server to be saved/changed.
    var updatePreferences = function(userPrefs){
      $http({
        method: 'POST',
        url:'https://tiny-tiny.herokuapp.com/collections/ta-test',
        data: userPrefs
      }).then(function(response){
        console.log("OK!");
      })
    }

    //gets our user preferences from the server/database
    var getPreferences = function(){
      $http({
        method: 'GET',
        url:'https://tiny-tiny.herokuapp.com/collections/ta-test'
      }).then(function(response){
        //copies the response object from the data base to our userPref object/model
        angular.copy(response.data[0], userPref);
      })
      return userPref
    }


    //returns an object to the controller with our key / value pairs.  key is what is called on the controller (ie: mainService.updatePreferences) value is the function defined above.

    return {
      updatePreferences: updatePreferences,
      getPrefs: getPreferences
    }

  }])
