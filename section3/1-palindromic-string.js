// solution1
function solution1(str) {
	const lowStr = str.toLowerCase().split("").reverse().join("");
	return str.toLowerCase() === lowStr ? "YES" : "NO";
}

// solution2
function solution(str) {
	let answer = "YES";
	str = str.toLowerCase();
	let len = str.length;

	for (let i = 0; i < Math.floor(len / 2); i++) {
		if (str[i] !== str[len - i - 1]) {
			answer = "NO";
		}
	}
	return answer;
}

// 테스트 케이스
console.log(solution("goooG")); // YES
console.log(solution("goooa")); // NO
