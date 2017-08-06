(function() {
	
	'use strict';
	
	angular.module('LunchCheck', [])
	
	.controller('LunchCheckController', LunchCheckController );
	
	
	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		
		$scope.name = "";
		
		
		$scope.checkIfTooMuch = function() {
				
				var items = $scope.name.split(',');
				
				if(!$scope.name){
					$scope.message = "Please enter data first";					
				}
				else if(items.length <= 3){
					$scope.message = "Enjoy!";
				}
				else{
					$scope.message = "Too much!";	
				}
			
			
		};
		
		
	}
	
})();