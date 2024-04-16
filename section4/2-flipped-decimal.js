function isPrime(num) {
	if (num === 1) {
		return false;
	}
	for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function solution(arr) {
	let answer = [];

	for (let x of arr) {
		let flippedNum = String(x).split("").reverse().join("");
		if (isPrime(Number(flippedNum))) {
			answer.push(Number(flippedNum));
		}
	}

	return answer;
}

// 테스트 케이스
console.log(isPrime(9));
console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
