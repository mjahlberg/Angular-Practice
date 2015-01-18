//this is the name of the angular app
angular.module('firstApp', [])

.controller('mainController', function(){

	//bind this to the view model
	var vm = this;

	//define variables and objects on this
	//this lets them be available to our views

	//define a basic variable
	vm.message = 'Hey there! Come see how good I look!';

	//define a list of items

	vm.computer = [
		{ name: 'Macbook Pro', color: 'Silver', nerdness: 7},
		{ name: 'Yoga 2 Pro', color: 'Gray', nerdness: 6},
		{ name: 'Chromebook', color: 'Black', nerdness: 5}
	];
})