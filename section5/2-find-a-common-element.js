function solution(arr1, arr2) {
	let commonArr = [];

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr1[i] === arr2[j]) {
				commonArr.push(arr1[i]);
			}
		}
	}
	let sortedArr = commonArr.sort((a, b) => a - b);

	return sortedArr;
}

// 테스트 케이스
console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])); // [2 3 5]
