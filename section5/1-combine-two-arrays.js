function solution(arr1, arr2) {
	let concatArr = arr1.concat(arr2);
	let sortedArr = concatArr.sort((a, b) => a - b);

	return sortedArr;
}

// 테스트 케이스
console.log(solution([1, 3, 5], [2, 3, 6, 7, 9])); // [1 2 3 3 5 6 7 9]
