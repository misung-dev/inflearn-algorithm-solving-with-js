function solution(m, arr) {
	let sum = 0;
	let count = 0;
	let left = 0;

	for (let right = 0; right < arr.length; right++) {
		sum += arr[right];
		if (sum === m) {
			count++;
		}
		while (sum >= m) {
			sum -= arr[left];
			left++;
			if (sum === m) {
				count++;
			}
		}
	}

	return count;
}

// 테스트 케이스
console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2])); // 3
