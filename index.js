module.exports = function getZerosCount(number) {
	var n = 5;
	var result = 0;
	while(number > n){
		result = result + Math.floor(number / n);
		n = n * 5;
	}

	return result;
	
}
