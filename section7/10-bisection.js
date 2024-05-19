function solution(target, arr) {
	let answer,
		left = 0,
		right = arr.length - 1;

	arr.sort((a, b) => a - b);

	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		if (arr[mid] === target) {
			answer = mid + 1;
			break;
		} else if (arr[mid] > target) right = mid - 1;
		else left = mid + 1;
	}
	return answer;
}

// 테스트 케이스
console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81])); // 3
