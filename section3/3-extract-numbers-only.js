// solution1
function solution1(str) {
	str = str.replace(/[^0-9]/g, "");

	return Math.floor(str);
}

// solution2
function solution(str) {
	let answer = "";
	for (let s of str) {
		if (!isNaN(s)) {
			answer += s;
		}
	}
	return parseInt(answer);
}

// 테스트 케이스
console.log(solution("g0en2T0s8eSoft")); // 208
