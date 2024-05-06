// solution1
function solution1(arr) {
	let sortedArr = arr.sort((a, b) => a - b);

	return sortedArr;
}

// solution2
function solution(arr) {
	let answer = arr;
	for (let i = 0; i < arr.length; i++) {
		let idx = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[idx]) {
				idx = j;
			}
		}
		[arr[i], arr[idx]] = [arr[idx], arr[i]];
	}

	return answer;
}

// 테스트 케이스
console.log(solution([13, 5, 11, 7, 23, 15])); // 5 7 11 13 15 23
