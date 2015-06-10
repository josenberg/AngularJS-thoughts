angular.module('directoryApp', [])
	.controller('directoryController', function(){
		
		var dirList = this;

		dirList.list = [
			{name:'Philipe', age: 19}, 
			{name:'Bruna', age: 20}			
		];

		dirList.addPerson = function(){
			dirList.list.push({name: dirList.name, age: dirList.age});
			dirList.name = '';
			dirList.age = 0;
		};
	});