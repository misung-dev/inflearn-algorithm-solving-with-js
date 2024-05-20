function count(songs, capacity) {
	let cnt = 1,
		sum = 0;
	for (let x of songs) {
		if (sum + x > capacity) {
			cnt++;
			sum = x;
		} else {
			sum += x;
		}
	}

	return cnt;
}

function solution(m, songs) {
	let answer;
	let left = Math.max(...songs);
	let right = songs.reduce((a, b) => a + b, 0);
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		if (count(songs, mid) <= m) {
			answer = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return answer;
}

// 테스트 케이스
console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 17
