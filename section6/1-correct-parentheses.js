function solution(str) {
	let answer = "YES";
	let stack = [];

	for (let x of str) {
		if (x === "(") {
			stack.push("(");
		} else {
			if (stack.length === 0) {
				answer = "NO";
			}
			stack.pop();
		}
	}
	if (stack.length > 0) {
		answer = "NO";
	}
	return answer;
}

// 테스트 케이스
console.log(solution("(()(()))(()")); // NO
console.log(solution("(())()")); // YES
console.log(solution("(()()))")); // NO
