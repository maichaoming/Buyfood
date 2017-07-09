var app = angular.module("app",[])
app.controller("aa",function($scope,$rootScope){
				$rootScope.fruit = "水果";
				$rootScope.animal = "动物";
				$scope.cat = "小猫"
			})
app.controller("bb",function($scope,$rootScope,$timeout){
				//$scope.fruit = $rootScope.animal;
				$timeout(function(){
					$rootScope.animal="老虎";
					$rootScope.cat = "大猫";
				},2000);
			})