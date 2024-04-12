function solution(str) {
	let answer = "YES";
	str = str.toLowerCase().replace(/[^a-z]/g, "");
	if (str.split("").reverse().join("") !== str) {
		answer = "NO";
	}

	return answer;
}

// 테스트 케이스
console.log(solution("found7, time: study; Yduts; emit, 7Dnuof")); // YES
