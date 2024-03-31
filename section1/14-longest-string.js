// solution1
function solution(str) {
	let max = str[0];

	for (let x of str) {
		if (max.length < x.length) {
			max = x;
		}
	}
	return max;
}

// solution2
function solution(str) {
	let answer,
		max = Number.MIN_SAFE_INTEGER;
	for (let x of str) {
		if (x.length > max) {
			max = x.length;
			answer = x;
		}
	}
	return answer;
}

// 테스트 케이스
console.log(solution(["teacher", "time", "student", "beautiful", "good"])); // beautiful
