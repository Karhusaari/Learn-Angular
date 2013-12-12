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

	$scope.getQuantity = function(){
		var total = 0;
		$.each( $scope.items, function(i){
			var qty = $scope.items[i].quantity;
			total = Number(total) + Number(qty);
		});
		if(total == 0){
			total = "";
			return total;
		}else{
			return total;
		}
		
	};

	$scope.getTotPrice = function(){
		var totPrice = 0;
		$.each( $scope.items, function(i){
			var qty = $scope.items[i].quantity;
			totPrice = Number(totPrice) + Number(qty);
		});
		if(totPrice == 0){
			totPrice = "";
			return totPrice;
		}else{
			return totPrice;
		}
		
	};

	$scope.remove = function(index) {
		$scope.items.splice(index, 1);
	}

	$scope.header = " items";

	$scope.removeAll = function(){
		$scope.items = [];
		$scope.header = " Your Cart is Empty";
	}
	$scope.addText = "";
	$scope.someText = "This is some text for: ";

	$scope.showAwesome = function(){
		if( $scope.addText.length > 0){
			$("#aweCheck").show();
		}else{
			$("#aweCheck").hide();
		}
	};

	$scope.isAwesome = function(){

		if( $scope.awesome == true && $scope.addText.length > 0){
			$scope.moreText = " is awesome.";
		}else{
			$scope.moreText = "";
			$scope.awesome = false;
		}
	};
	
});