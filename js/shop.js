var shopModule = angular.module("shop", []);

shopModule.controller("CartController",function($scope){
	$scope.items = [
		{title: 'Whiskey', quantity: 1, price: 13.95},
		{title: 'Vodka', quantity: 4, price: 23.95},
		{title: 'Beer', quantity: 6, price: 9.99}
	];
	
	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	}
});