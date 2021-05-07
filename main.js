

const startPosition = 1288;

const input = ["114 8",
"137 19",
"104 9",
"38 13",
"140 10",
"28 17",
"40 8",
"18 5",
"141 1",
"5 0",
"15 17",
"106 15",
"120 18",
"88 2",
"54 3",
"134 17",
"70 12",
"22 15",
"56 12",
"104 10",
"143 6",
"108 8",
"154 1",
"64 9",
"81 17",
"88 3",
"121 2",
"77 10",
"82 6",
"34 6",
"25 12",
"79 2",
"46 8",
"86 13",
"120 12",
"40 8",
"26 12",
"71 19",
"71 18",
"57 1",
"54 1",
"144 16"];

const process = (inputs) => {
	let currentPositon = startPosition;
	console.log('Position km 0 => ', startPosition);
	let processData = [];
	inputs.forEach((input, index) => {
		processData = input.split(' ');
		console.log(processData[0], `l'ayant depasse et `, processData[1], `qu'il a depasse`);
		currentPositon = currentPositon + parseInt(processData[0]) - parseInt(processData[1]) 
		console.log('Position km ', index + 1 , ' => ', currentPositon);
	})

	let recompense = 0;
	if (currentPositon <= 100){
		recompense = 1000;
	} else if (currentPositon <= 10000) {
		recompense = 100;
	} else {
		recompense = 'KO';
	}
	console.log('La recompense => ', recompense);

}

process(input);