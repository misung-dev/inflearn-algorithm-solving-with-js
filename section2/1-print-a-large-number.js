function solution(arr) {
	let num = [];
	num.push(arr[0]);

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) num.push(arr[i]);
	}
	return num;
}

console.log(solution([7, 3, 9, 5, 6, 12])); // [7, 9, 6, 12]
