
module.exports = function getZerosCount(number)
 {
	var n = 5;
	var res = 0;
	while(number > n)
	{
		res = res + Math.floor(number / n);
		n = n * 5;
	}

	return res;
	
}