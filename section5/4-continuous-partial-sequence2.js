function solution(m, arr) {
	let count = 0;
	let sum = 0;
	let left = 0;

	for (let right = 0; right < arr.length; right++) {
		sum += arr[right];
		while (sum > m) {
			sum -= arr[left];
			left++;
		}
		count += right - left + 1;
	}

	return count;
}

// 테스트 케이스
console.log(solution(5, [1, 3, 1, 2, 3])); // 10
