function solution(n, card) {
	const cardArr = card.sort((a, b) => b - a);
	let sumList = [];

	for (let i = 0; i < cardArr.length; i++) {
		for (let j = i + 1; j < cardArr.length; j++) {
			for (let k = j + 1; k < cardArr.length; k++) {
				sumList.push(cardArr[i] + cardArr[j] + cardArr[k]);
			}
		}
	}
	return sumList[n - 1];
}

// 테스트 케이스
console.log(solution(3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
