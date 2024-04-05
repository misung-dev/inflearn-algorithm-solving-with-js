function solution(arr) {
	let count = 1,
		max = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			count++;
			max = arr[i];
		}
	}
	return count;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
