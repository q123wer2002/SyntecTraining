//controller
BeveragesStore.controller('controller_shoppingCart', function($scope,$http){
	//search info
	$scope.objSearch = {
		szUserName : "TestName", //search name
		aryResult : [ //result, (example)
			{'name':"奶茶", 'number':5, 'cost':50},
			{'name':"奶茶", 'number':5, 'cost':50},
			{'name':"奶茶", 'number':5, 'cost':50},
			{'name':"奶茶", 'number':5, 'cost':50},
		],
	};

	//HOMEWORK, search username from database, and push data into [$scope.objSearch.aryResult]
	$scope.fnGoSearching = function(){

	}

	//HOMEWORK, delete this beverage from database
	$scope.fnDeleteThisBeverage = function(beverage){

	}

});