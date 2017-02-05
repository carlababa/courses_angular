require("./css/App.css");
require("./css/Card.css");
require("./css/Content.css");
require("./css/Filters.css");
require("./css/Footer.css");
require("./css/index.css");
require("./css/material.min.css");
import courses from "../courses.json";
import categories from "../categories.json";

angular.module('Courses', [

])
.controller('MainCtrl', function($scope, $http) {
  $scope.courses = courses;
  $scope.categories = categories;
});
