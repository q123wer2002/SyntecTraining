//controller
BeveragesStore.controller('controller_beveragesShopping', function($scope,$http){
	//all beverages show HTML
	$scope.aryAllBeverages = [
		{"name":"紅茶", "number":0, "cost":20},
		{"name":"綠茶", "number":0, "cost":20},
		{"name":"烏龍茶", "number":0, "cost":20},
		{"name":"鮮甘蔗檸檬", "number":0, "cost":50},
		{"name":"盆栽鮮奶茶", "number":0, "cost":55},
		{"name":"小芋圓鮮奶綠", "number":0, "cost":55},
		{"name":"鮮奶煎茶", "number":0, "cost":60},
		{"name":"鮮甘蔗鮮奶", "number":0, "cost":65},
		{"name":"可可牛奶", "number":0, "cost":50},
		{"name":"檸檬多多", "number":0, "cost":40},
		{"name":"布丁奶茶", "number":0, "cost":35},
		{"name":"黑糖鮮奶", "number":0, "cost":7},
	];

	//
	$scope.szUserName = "";
	$scope.objBeverageEventHandler = {
		AddOneProduct : function(beverage){
			//add one
			beverage.number = beverage.number +1;
		},
		MinusOneProduct : function(beverage){
			if( beverage.number == 0 ){
				return;
			}

			//minus one
			beverage.number = beverage.number -1;
		},
		//HOMEWORK
		BuyAllBeverages : function(){
			//use db restfulapi to send selected products into db
			//use ajax POST method
			//call api : http://[ip]:[port]/dbapi/myShoppingCart

			//example for using ajax to connect dbapi
			var objData = PackageOrderBeverages();
			$http.post(
				'http://localhost:8888/dbapi/myShoppingCart', //uri
				JSON.stringify(objData) //param
			)
			.then(function(data){
				//get data from server
				console.log(data);
			});
			//end example
		},
	};

	//HOMEWORK, pageage all data into db format
	var PackageOrderBeverages = function(){
	}
});