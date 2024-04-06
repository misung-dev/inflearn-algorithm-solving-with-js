function solution(a, b) {
	let result = "";

	for (let i = 0; i < a.length; i++) {
		if (a[i] === b[i]) {
			result += "D";
		} else if (a[i] === 1 && b[i] === 3) {
			result += "A";
		} else if (a[i] === 2 && b[i] === 1) {
			result += "A";
		} else if (a[i] === 3 && b[i] === 2) {
			result += "A";
		} else {
			result += "B";
		}
	}

	return result;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])); // 'ABABD'
