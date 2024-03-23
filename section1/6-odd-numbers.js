// solution1
function solution1(arr) {
	let oddArr = [];
	let answer = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 1) {
			oddArr.push(arr[i]);
		}
	}

	let sum = oddArr.reduce((acc, cur) => acc + cur, 0);
	let min = Math.min(...oddArr);

	answer.push(sum);
	answer.push(min);

	return answer;
}

// solution2
function solution(arr) {
	let answer = [];
	let sum = 0;
	min = Number.MAX_SAFE_INTEGER;

	for (let x of arr) {
		if (x % 2 === 1) {
			sum += x;
			if (x < min) min = x;
		}
	}

	answer.push(sum);
	answer.push(min);

	return answer;
}

// 테스트 케이스
console.log(solution([12, 77, 38, 41, 53, 92, 85]));
