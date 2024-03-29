// solution1
solution1 = (str) => str.toUpperCase();

// solution2
function solution(str) {
	let answer = "";
	for (let x of str) {
		let num = x.charCodeAt();
		if (num >= 97 && num <= 122) {
			answer += x.toUpperCase();
		} else {
			answer += x;
		}
	}
	return answer;
}

console.log(solution("ItisTimeToStudy")); // ITISTIMETOSTUDY
