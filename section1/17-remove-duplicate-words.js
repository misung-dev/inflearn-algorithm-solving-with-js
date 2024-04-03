// solution1
function solution1(arr) {
	let words = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) === i) {
			words.push(arr[i]);
		}
	}
	return words;
}

// solution2
function solution(arr) {
	let answer;

	answer = arr.filter(function (v, i) {
		return arr.indexOf(v) === i;
	});
	return answer;
}

// 테스트 케이스
console.log(solution(["good", "time", "good", "time", "student"])); // [good, time, student];
