// solution1
function solution1(arr) {
	let score = 0,
		prev = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 1) {
			if (arr[i - 1] === 1) {
				prev++;
			} else {
				prev = 0;
			}
			score += prev + 1;
		}
	}

	return score;
}

// solution2
function solution(arr) {
	let score = 0,
		prev = 0;

	for (let x of arr) {
		if (x === 1) {
			prev++;
			score += prev;
		} else {
			prev = 0;
		}
	}

	return score;
}

// 테스트 케이스
console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0])); // 10
