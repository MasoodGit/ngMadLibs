angular.module('madLibsApp',[])
.controller('madLibsController',['$scope',function($scope) {
  $scope.words = {
    male_name : "Male name",
    dirty_task : "Dirty task",
    obnoxious_celebrity : "Obnoxious celebrity",
    job_title : "Job title",
    celebrity : "Celebrity",
    huge_number : "Huge Number",
    tedious_task : "Tedious task",
    useless_skill : "Useless skill",
    adjective : "Adjective"
  },
  $scope.gender = "Male"

}]);
