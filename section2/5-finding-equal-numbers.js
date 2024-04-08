function solution(arr) {
	const n = arr.length;
	let ranks = Array.from({ length: n }, () => 1);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i] < arr[j]) {
				ranks[i]++;
			}
		}
	}

	return ranks;
}

// 테스트 케이스
console.log(solution([87, 89, 92, 100, 76])); // [4, 3, 2, 1, 5]
console.log(solution([92, 92, 92, 100, 76])); // [2, 2, 2, 1, 5]
