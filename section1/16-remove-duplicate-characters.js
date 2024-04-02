function solution(str) {
	let word = "";

	for (let i = 0; i < str.length; i++) {
		if (str.indexOf(str[i]) === i) {
			word += str[i];
		}
	}

	return word;
}

// 테스트 케이스
console.log(solution("ksekkset")); // kset
