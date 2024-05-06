function solution(need, plan) {
	let answer = "YES";
	let queue = need.split("");

	for (let x of plan) {
		if (queue.includes(x)) {
			if (x !== queue.shift()) {
				return "NO";
			}
		}
	}
	if (queue.length > 0) {
		return "NO";
	}

	return answer;
}

// 테스트 케이스
console.log(solution("CBA", "CBDAGE")); // YES
