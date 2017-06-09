//controller
BeveragesStore.controller('controller_shoppingCart', function($scope,$http){
	$scope.objSearch = {
		szUserName : "aaa",
		aryResult : [
			{'name':"奶茶", 'number':5, 'cost':50},
			{'name':"奶茶", 'number':5, 'cost':50},
			{'name':"奶茶", 'number':5, 'cost':50},
			{'name':"奶茶", 'number':5, 'cost':50},
		],
	};

	$scope.GoSearching = function(){

	}

	$scope.DeleteThisBeverage = function(beverage){

	}

});