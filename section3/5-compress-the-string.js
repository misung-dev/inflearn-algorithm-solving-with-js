function solution(str) {
	let answer = "";
	let count = 1;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count++;
		} else {
			answer += str[i];
			if (count > 1) {
				answer += count;
			}
			count = 1;
		}
	}

	return answer;
}

// 테스트 케이스
console.log(solution("KKHSSSSSSSE")); // K2HS7E
