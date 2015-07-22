angular.module('madLibsApp',['ngMessages'])
.controller('madLibsController',['$scope',function($scope) {
  $scope.words = {
    male_name : "",
    dirty_task : "",
    obnoxious_celebrity : "",
    job_title : "",
    celebrity : "",
    huge_number : "",
    tedious_task : "",
    useless_skill : "",
    adjective : ""
  };
  
  $scope.gender = "Male";
  
  $scope.submitted = false;

  $scope.interacted = function(field) {
    return $scope.pickListForm.$submitted || field.$touched;
  };

  $scope.submit = function() {
    if($scope.pickListForm.$valid) {
      $scope.submitted = true;
    }
  };

  $scope.reset = function() {
    $scope.gender = "Female";
    $scope.submitted = false;
    for(var prop in $scope.words) {
      $scope.words[prop] = "";
    }
    $scope.pickListForm.$setPristine();
  };

}]);
