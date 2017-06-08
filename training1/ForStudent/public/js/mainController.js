var BeveragesStore = angular.module('BeveragesStore', []);

//controller
BeveragesStore.controller('controller_main', function($scope, $rootScope,$http){

});

//directive
BeveragesStore.directive("scroll", function($window){
	return function(scope, element, attrs) {
		angular.element($window).bind("scroll", function() {
			if (this.pageYOffset >= 140) {
				scope.isChangeClass = true;
			}else{
				scope.isChangeClass = false;
			}
			scope.$apply();
		});
	};
});