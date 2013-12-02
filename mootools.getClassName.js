(function() {
	"use strict";
	
	Element.implement("getClassName", function(param) {

		var classArr;
		
		if(!param)
			return false;

		classArr = this.get('class').split(" ");

		if(typeOf(param) === 'string') {
			return classArr.filter(function(item, index) {
				return item.contains(param);
			});
		}

		if(!param < classArr.length) {
			return classArr[param];
		}
	});
})();