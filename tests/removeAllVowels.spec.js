describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should remove all vowels from a string', function(){
		var fakeString = "There is no string";

		var filteredString = $filter('removeAllVowels')(fakeString);

		expect(filteredString).toEqual('Thr s n strng');
	});
});
