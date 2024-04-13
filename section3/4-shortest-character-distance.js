function solution(str, s) {
	let result = [];
	let prev = Infinity;

	// 거리계산 (왼쪽 -> 오른쪽)
	for (let i = 0; i < str.length; i++) {
		if (str[i] === s) {
			prev = 0;
			result.push(prev);
		} else {
			prev++;
			result.push(prev);
		}
	}

	// 거리계산 (오른쪽 -> 왼쪽)
	prev = Infinity;
	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] === s) {
			prev = 0;
		} else {
			prev++;
			result[i] = Math.min(result[i], prev);
		}
	}

	return result;
}

console.log(solution("teachermode", "e")); // 1 0 1 2 1 0 1 2 2 1 0
