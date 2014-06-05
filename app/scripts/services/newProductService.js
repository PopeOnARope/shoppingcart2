angular.module('shoppingCarApp')
	.factory('NewProductService', function($resource) {
		return $resource('http://tiy-fee-rest.herokuapp.com/collections/pope2/:id', 
		{
			id: '@_id'
		}, 
		{
			showProduct: { method: 'GET'	},
			updateProduct: { method: 'PUT'	},
			deleteProduct: { method: 'DELETE'	}


		});
	});