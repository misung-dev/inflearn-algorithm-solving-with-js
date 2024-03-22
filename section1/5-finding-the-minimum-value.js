// solution1
function solution1(arr) {
	const sortedArr = arr.sort((a, b) => a - b);

	return sortedArr[0];
}

// solution2
function solution(arr) {
	let minimum = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < minimum) {
			minimum = arr[i];
		}
	}

	return minimum;
}

// 테스트 케이스
console.log(solution([5, 7, 1, 3, 2, 9, 11]));
