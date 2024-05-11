function solution(arr) {
	let answer = arr;

	for (let i = 0; i < arr.length; i++) {
		let tmp = arr[i],
			j;
		for (j = i - 1; j >= 0; j--) {
			if (arr[j] > tmp) {
				arr[j + 1] = arr[j];
			} else {
				break;
			}
		}
		arr[j + 1] = tmp;
	}
	return answer;
}

// 테스트 케이스
console.log(solution([11, 7, 5, 6, 10, 9])); // 5 6 7 9 10 11
