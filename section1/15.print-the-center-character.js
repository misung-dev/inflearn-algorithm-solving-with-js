// solution1
function solution1(str) {
	let mid = Math.floor(str.length / 2);

	if (str.length % 2 === 1) {
		return str[mid];
	} else {
		return str.substr(mid - 1, mid);
	}
}

// solution2
function solution2(str) {
	let mid = Math.floor(str.length / 2);
	return str.length % 2 === 1 ? str[mid] : str.substr(mid - 1, mid);
}

// solution3
function solution(str) {
	let answer;
	let mid = Math.floor(str.length / 2);
	if (str.length % 2 === 1) {
		answer = str.substr(mid, 1);
	} else {
		answer = str.substr(mid - 1, 2);
	}
	return answer;
}

// 테스트 케이스
console.log(solution("study")); // u
console.log(solution("good")); // oo
