angular.module('myBlog')
	.controller('ProductCtrl', ['$scope', '$routeParams', '$location', 'NewProductService', function($scope, $routeParams, $location, NewProductService) {
		
		$scope.product = NewProductService.showProduct({ id: $routeParams.id });

		$scope.updateProduct = function() {
			ProductService.updateProduct($scope.product);
			$location.path('/blog/' + $routeParams.id);
		};

		$scope.delete = function() {
			ProductService.deleteProduct({ id: $routeParams.id });
			$location.path('/blog');
		};
		// editing
		// deleting
		// showing

	}]);