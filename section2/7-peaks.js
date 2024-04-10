function solution(arr) {
	let count = 0;
	let n = arr.length;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let peaks = arr[i][j];
			let up = i === 0 ? Number.MIN_SAFE_INTEGER : arr[i - 1][j];
			let down = i === n - 1 ? Number.MIN_SAFE_INTEGER : arr[i + 1][j];
			let left = j === 0 ? Number.MIN_SAFE_INTEGER : arr[i][j - 1];
			let right = j === n - 1 ? Number.MIN_SAFE_INTEGER : arr[i][j + 1];

			if (peaks > up && peaks > down && peaks > left && peaks > right) {
				count++;
			}
		}
	}
	return count;
}

// 테스트 케이스
console.log(
	solution([
		[5, 3, 7, 2, 3],
		[3, 7, 1, 6, 1],
		[7, 2, 5, 3, 4],
		[4, 3, 6, 4, 1],
		[8, 7, 3, 5, 2],
	])
); // 10
