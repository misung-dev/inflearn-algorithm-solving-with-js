function compareMaps(map1, map2) {
	if (map1.size !== map2.size) {
		return false;
	}
	for (let [key, val] of map1) {
		if (!map2.has(key) || map2.get(key) !== val) {
			return false;
		}
	}
	return true;
}

function solution(s, t) {
	let answer = 0;
	let tHash = new Map();
	let sHash = new Map();

	for (let x of t) {
		if (tHash.has(x)) {
			tHash.set(x, tHash.get(x) + 1);
		} else {
			tHash.set(x, 1);
		}
	}

	let len = t.length;
	for (let i = 0; i < len - 1; i++) {
		if (sHash.has(s[i])) {
			sHash.set(s[i], sHash.get(s[i]) + 1);
		} else {
			sHash.set(s[i], 1);
		}
	}
	let lt = 0;
	for (let rt = len - 1; rt < s.length; rt++) {
		if (sHash.has(s[rt])) {
			sHash.set(s[rt], sHash.get(s[rt]) + 1);
		} else {
			sHash.set(s[rt], 1);
		}
		if (compareMaps(sHash, tHash)) {
			answer++;
		}
		sHash.set(s[lt], sHash.get(s[lt]) - 1);
		if (sHash.get(s[lt]) === 0) {
			sHash.delete(s[lt]);
		}
		lt++;
	}

	return answer;
}

// 테스트 케이스
console.log(solution("bacaAacba", "abc")); // 3
