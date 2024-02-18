//your JS code here. If required.

let student = {
	name: "john"
}

Object.prototype.getKeys = function(){
	return Object.keys(this);
}
console.log(student.getKeys())
document.write(student.getKeys())