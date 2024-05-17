function solution(meeting) {
	let count = 0;

	meeting.sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0] - b[0];
		} else {
			return a[1] - b[1];
		}
	});

	let endTime = 0;
	for (let x of meeting) {
		if (x[0] >= endTime) {
			endTime = x[1];
			count++;
		}
	}

	return count;
}

// 테스트 케이스 1
console.log(
	solution([
		[1, 4],
		[2, 3],
		[3, 5],
		[4, 6],
		[5, 7],
	])
); // 3

// 테스트 케이스 2
console.log(
	solution([
		[3, 3],
		[1, 3],
		[2, 3],
	])
); //2
