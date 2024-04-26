function solution(k, arr) {
	let max = 0;

	for (let i = 0; i <= arr.length - k; i++) {
		let sum = 0;
		for (let j = i; j < i + k; j++) {
			sum += arr[j];
		}
		if (max < sum) {
			max = sum;
		}
	}

	return max;
}

// 테스트 케이스
console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15])); // 56
