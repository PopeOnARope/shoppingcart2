'use strict';

angular.module('shoppingCartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
    .controller("ReviewController", function() {
  	this.review={};
  	this.addReview=function(product){
  		product.reviews.push(this.review);
  	this.review={};
  	}
  })

  .controller('StoreController', function($scope){
	$scope.products = [
	{
	pic: "../images/boots.jpg", 
	qty: 1,
	reviews: [
		{}
		],
	name: 'hiking boots',
	price: 29.95,
	id: 0,
	description: "The name is misleading because the boots don't actually hike, but if you wear them, then YOU can hike. Can you hike without hiking boots? Who knows. Without these boots you aren't hiking, just walking. Don't walk. Hike. ",
	canPurchase:true,
	soldOut: false
	},
	{
	pic:"../images/backpack.jpg", 
	qty: 1,
	reviews: [
		{

		}
		],
	name: "backpack",
	price: 5.95,
	id: 1,
	description:"Buy this backpack so you don't have to carry around all of your posessions loose in your arms or on your head. What are you an acrobat? No. Buy this. ",
	canPurchase: false,
	soldOut: true
	},
	{
	pic: "../images/bottle.jpg", 
	qty: 1,
	reviews: [
		{

		}
		],
	name: "waterbottle",
	price:10.00,
	id: 2,
	description: "a cool thing to drink water out of! Drink water on the go or at home! You can drink water literally almost anywhere!",
	canPurchase:true,
	soldOut: false
	},
		{
	pic: "../images/pants.jpg", 
	qty: 1,
	reviews: [
		{

		}
		],
	name: "cool guy pants",
	price: 25.50,
	id: 3, 
	description: "Just because you are a super chill bro doesn't mean that you shouldn't be wearing coolguy pants. All the cool guys are wearing them, especially chill bros!",
	canPurchase: true,
	soldOut: false
	},
		{
	pic: "../images/watch.jpg", 
	qty: 1,
	reviews: [
		{

		}
		],
	name: "waterproof watch",
	price: 60.00,
	id: 4,
	description:"Tired of looking at your wrist for the time, only to realize you are under water and don't have a watch? If you still wear a watch, odds are you only do so because your phone isn't waterproof. Instead of trying to waterproofize your phone, buy this watch for making tell time even under water!",
	canPurchase: true,
	soldOut:false
	},
		{
	pic: "../images/sunglasses.jpg", 
	qty: 1,
	reviews: [
		{

		}
		],
	name: "chillBro sunglasses",
	price:200.00,
	id: 5, 
	description:"Spending $200 on sunglasses is totally reasonable. Just because you lost your last five pairs of sunglasses doesn't mean you'll lose this one.",
	canPurchase: true,
	soldOut: false
	}
]


$scope.addItem = function(product){

	$scope.purchased.push(product)
}
$scope.purchased = []

})


  





