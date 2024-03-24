function solution(day, arr) {
	let count = 0;

	for (let x of arr) {
		if (x % 10 === day) {
			count++;
		}
	}

	return count;
}

// 테스트 케이스
console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
