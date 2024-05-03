function solution(s) {
	let answer;
	let stack = [];

	for (let x of s) {
		if (!isNaN(x)) {
			stack.push(Number(x));
		} else {
			let rt = stack.pop();
			let lt = stack.pop();
			if (x === "+") {
				stack.push(lt + rt);
			} else if (x === "-") {
				stack.push(lt - rt);
			} else if (x === "*") {
				stack.push(lt * rt);
			} else if (x === "/") {
				stack.push(lt / rt);
			}
		}
	}
	answer = stack[0];

	return answer;
}

// 테스트 케이스
console.log(solution("352+*9-")); // 12
