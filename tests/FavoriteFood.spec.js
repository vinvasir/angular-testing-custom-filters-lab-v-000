describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter for favorite food', function(){
	  var fakePeople = [
	  	{
	  		name: 'Harvey Hiddleston',
	  		favoriteFood: 'Guacamole'
	  	},
	  	{
	  		name: 'Henrietta Hogson',
	  		favoriteFood: 'Guacamole'
	  	},
	  	{
	  		name: 'No one',
	  		favoriteFood: 'Guacamole'
	  	},
	  	{
	  		name: 'Hugo Bandweaver',
	  		favoriteFood: 'Fiddlesticks'
	  	},
	  	{
	  		name: 'Severus Seamsworth',
	  		favoriteFood: 'Fish sticks'
	  	},
	  	{
	  		name: 'Stone Parkwell',
	  		favoriteFood: 'Fish sticks'
	  	}
	  ];

	  var favoritePeople = $filter('favoriteFood')(fakePeople, 'Fish sticks');
	  expect(favoritePeople.length).toEqual(2);

	  var goodPeople = $filter('favoriteFood')(fakePeople, 'Guacamole');
	  expect(goodPeople.length).toEqual(3);
	  expect(goodPeople[2].name).toEqual('No one');

	  var trollPeople = $filter('favoriteFood')(fakePeople, 'Fiddlesticks');
	  expect(trollPeople.length).toEqual(1);		  
  });




});
