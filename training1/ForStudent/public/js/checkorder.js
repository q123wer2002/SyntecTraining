//controller
BeveragesStore.controller('controller_shoppingCart', function($scope,$http){
	//search info
	$scope.objSearch = {
		szUserName : "TestName", //search name
		aryResult : [ //result, (example)
			{'name':"奶茶", 'count':1, 'cost':50},
			{'name':"鮮奶茶", 'count':2, 'cost':50},
			{'name':"果汁", 'count':3, 'cost':50},
			{'name':"檸檬水", 'count':4, 'cost':50},
		],
	};

	//HOMEWORK, search username from database, and push data into [$scope.objSearch.aryResult]
	$scope.fnGoSearching = function(){

	}

	//HOMEWORK, delete this beverage from database
	$scope.fnDeleteThisBeverage = function(nIndex, beverage){
		//only ui
		$scope.objSearch.aryResult.splice(nIndex,1);
	}

});