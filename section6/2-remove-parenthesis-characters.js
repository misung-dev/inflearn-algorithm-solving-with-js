function solution(str) {
	let stack = [];
	let answer;

	for (let x of str) {
		if (x === ")") {
			while (stack.pop() !== "(");
		} else {
			stack.push(x);
		}
	}
	answer = stack.join("");
	return answer;
}

//테스트 케이스
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)")); // EFLM
