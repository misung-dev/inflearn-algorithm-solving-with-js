function solution(size, arr) {
	let answer = Array.from({ length: size }, () => 0);
	arr.forEach((x) => {
		let pos = -1;
		for (let i = 0; i < size; i++) {
			if (x === answer[i]) {
				pos = i;
			}
		}
		if (pos === -1) {
			for (let i = size - 1; i >= 1; i--) {
				answer[i] = answer[i - 1];
			}
		} else {
			for (let i = pos; i >= 1; i--) {
				answer[i] = answer[i - 1];
			}
		}
		answer[0] = x;
	});
	return answer;
}

// 테스트 케이스
console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7])); // 7 5 3 2 6
