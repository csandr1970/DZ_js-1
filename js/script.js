function pow(base, power) {
	var result = 1;

	for (var i = 0; i < power; i++){
		result *= base;
	}

	return result;
}

var base = + prompt('Введите число, которое необходимо возвести в степень', '00');
var power = + prompt('Введите степень (целое положительное число)', '00');

if (power < 0 || power - Math.ceil(power)!=0) {
		alert('Введите степень - целое положительное число');
} else {
		alert(pow(base, power));
		console.log( pow(base, power) );
};
