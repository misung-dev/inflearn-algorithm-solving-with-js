// solution1
function solution1(arr) {
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

// solution2
function solution(arr) {
	let answer = 0;
	let n = arr.length;
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let flag = 1;
			for (let k = 0; k < 4; k++) {
				let nx = i + dx[k];
				let ny = j + dy[k];
				if (nx > 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
					flag = 0;
					break;
				}
			}
			if (flag) {
				answer++;
			}
		}
	}
	return answer;
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
