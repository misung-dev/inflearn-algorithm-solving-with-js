function solution(n) {
	let answer = Math.ceil(n / 12);
	return answer;
}

// 테스트 케이스
console.log(solution(25));
console.log(solution(178));
