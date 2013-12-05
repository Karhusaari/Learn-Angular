var shopModule = angular.module("shop", []);

shopModule.controller("CartController", function($scope) {
	$scope.items = [{
		title: 'Whiskey',
		quantity: 1,
		price: 13.95
	}, {
		title: 'Vodka',
		quantity: 4,
		price: 23.95
	}, {
		title: 'Beer',
		quantity: 6,
		price: 9.99
	}];

	$scope.header = " : " + $scope.items.length + " items total.";

	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
		$scope.header = " : " + $scope.items.length + " items total.";
	}

	$scope.removeAll = function(){
		$scope.items = [];
		$scope.header = ": Your Cart is Empty";
	}

	$scope.someText = "This is some text for: ";

	$scope.isAwesome = function(){
		if( $scope.awesome == true){
			$scope.moreText = " is awesome.";
		}else{
			$scope.moreText = "";
		}
	};
	
});