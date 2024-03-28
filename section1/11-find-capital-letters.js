function solution(str) {
	let answer = 0;
	for (let x of str) {
		if (x === x.toUpperCase()) answer++;
	}

	return answer;
}

// 테스트 케이스
console.log(solution("KoreaTimeGood"));
