/**
* Creates a copy of an object
* @param the obj to copy
* @return the copy of the object
**/
function copy(obj)
{
	var copyObj = {};

	for (var i in obj) {
		if (typeof(obj[i]) !== 'object') {
			copyObj[i] = obj[i];
		}
		else {
			copyObj[i] = this.copy(obj[i]);
		}
	}

	return copyObj;
}