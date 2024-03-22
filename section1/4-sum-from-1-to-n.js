function solution(n) {
	let answer = 0;
	for (let i = 1; i <= n; i++) {
		answer = answer + i;
	}

	return answer;
}

// 테스트 케이스
console.log(solution(10));
