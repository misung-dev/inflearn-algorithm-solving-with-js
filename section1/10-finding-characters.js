// solution1
function solution1(str, t) {
	let count = 0;

	for (let x of str) {
		if (x === t) {
			count++;
		}
	}

	return count;
}

// solution2
function solution(str, t) {
	let answer = str.split(t).length;

	return answer - 1;
}

// 테스트 케이스
console.log(solution("COMPUTERPROGRAMMING", "R"));
