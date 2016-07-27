angular.module("app")
  .factory("mainService", ["$http", function($http){

//define our functions and variables to be returned;

    //defines our userPreference object to return to the front end
    var userPref = {};

    //returns an object to the controller with our key / value pairs.  key is what is called on the controller (ie: mainService.updatePreferences) value is the function defined above.

    return {
      updatePreferences: updatePreferences,
      getPrefs: getPreferences
    }

  }])
