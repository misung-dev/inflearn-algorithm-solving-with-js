function solution(str) {
	let answer;
	let strHash = new Map();

	for (let x of str) {
		if (strHash.has(x)) {
			strHash.set(x, strHash.get(x) + 1);
		} else {
			strHash.set(x, 1);
		}
	}
	let max = Number.MIN_SAFE_INTEGER;
	for (let [key, val] of strHash) {
		if (val > max) {
			max = val;
			answer = key;
		}
	}

	return answer;
}

// 테스트 케이스
console.log(solution("BACBACCACCBDEDE")); // C
