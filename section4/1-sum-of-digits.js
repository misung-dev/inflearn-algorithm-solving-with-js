function solution(n, arr) {
	let answer = 0;
	let maxSum = 0;

	for (let x of arr) {
		let sum = 0;
		splitNum = String(x).split("");

		for (let i = 0; i < splitNum.length; i++) {
			sum += parseInt(splitNum[i]);
		}

		if (sum >= maxSum) {
			if (sum > maxSum) {
				maxSum = sum;
				answer = x;
			} else {
				if (answer < x) {
					answer = x;
				}
			}
		}
	}
	return answer;
}

// 테스트 케이스
console.log(solution(7, [128, 460, 603, 40, 521, 137, 123])); // 137
