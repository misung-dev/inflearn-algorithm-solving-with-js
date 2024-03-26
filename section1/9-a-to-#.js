// solution1
function solution1(str) {
	let answer = "";

	for (let x of str) {
		if (x === "A") {
			answer += "#";
		} else {
			answer += x;
		}
	}
	return answer;
}
// 테스트 케이스
console.log(solution1("BANANA"));

// solution2
function solution2(str) {
	let answer = str;

	answer = str.replace(/A/g, "#");
	return answer;
}

// 테스트 케이스
console.log(solution2("BANANA"));
