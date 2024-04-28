function solution(str1, str2) {
	let answer = "YES";
	let strHash = new Map();

	for (let x of str1) {
		if (strHash.has(x)) {
			strHash.set(x, strHash.get(x) + 1);
		} else {
			strHash.set(x, 1);
		}
	}

	for (let x of str2) {
		if (!strHash.has(x) || strHash.get(x) == 0) {
			return "NO";
		}
		strHash.set(x, strHash.get(x) - 1);
	}
	return answer;
}

// 테스트 케이스
console.log(solution("AbaAeCe", "baeeACA")); // YES
console.log(solution("abaCC", "Caaab")); // NO
