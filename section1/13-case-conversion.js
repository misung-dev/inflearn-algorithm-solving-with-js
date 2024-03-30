function solution(str) {
	let answer = "";

	for (let x of str) {
		num = x.charCodeAt();
		if (num >= 65 && num <= 90) {
			answer += x.toLowerCase();
		} else {
			answer += x.toUpperCase();
		}
	}
	return answer;
}

// 테스트 케이스
console.log(solution("StuDY")); // sTUdy
