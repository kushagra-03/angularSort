var app = angular.module('angularSort',[], function(){

})

app.controller('BuyBookCtrl',function($scope){
	$scope.book = 
		{	
			name: "The Rubyist Way", 
			sources: [
				{
					title : "Kindle",
					new_price :.01000000000,
					used_price : 13.96
				},
				{
					title : "Amazon",
					new_price : 68.58,
					used_price : 12.11
				},
				{
					title : "Bing",
					new_price : 47.88,
					used_price : "None"
				},
				{
					title : "Google",
					new_price : "None",
					used_price : 12.06	 
				},
				{
					title : "eCampus",
					new_price : "None",
					used_price : "None" 
				},
				{
					title : "Powell",
					new_price : "None",
					used_price : 12.99	 
				},				
			]
		};

	$scope.predicate = "new_price";
	$scope.reverse = false;	

	$scope.sortBy = function(newPredicate){
		if ($scope.predicate == newPredicate){
			$scope.reverse = !$scope.reverse;
		}
			$scope.predicate = newPredicate;
	};

	$scope.priceEmpty = function(price){
		if (!isNumber(price)){
			return true;
		}else{
			return false;
		}
	};
		
	var isNumber = function(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	};

});


app.controller('SellBookCtrl', function($scope){
	$scope.book = 
		{	
			name: "The Rubyist Way", 
			sources: [
				{
					title : "Kindle",
					value : 46.70
				},
				{
					title : "Amazon",
					value : 68.50
				},
				{
					title : "Bing",
					value : 24.00
				},
				{
					title : "Google",
					value : 34.20
				}				
			]
		};

	$scope.predicate = "value";
	$scope.reverse = false;	

	$scope.sortBy = function(newPredicate){
		$scope.reverse = !$scope.reverse;
	};
});