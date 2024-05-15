function solution(arr) {
	let answer = [];
	let sortArr = arr.slice();
	sortArr.sort((a, b) => a - b); // 숫자정렬

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== sortArr[i]) {
			answer.push(i + 1);
		}
	}

	return answer;
}

// 테스트 케이스
let arr1 = console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160])); // 3 8
let arr2 = console.log(solution([120, 130, 150, 150, 130, 150])); // 3 5
