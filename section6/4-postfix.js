// solution1
function solution1(s) {
	const stack = [];

	for (const x of s) {
		if (isNaN(x)) {
			// 숫자 아니면, 숫자 두개를 꺼내와서 pop
			const right = stack.pop();
			const left = stack.pop();

			if (x === "+") {
				stack.push(left + right);
			} else if (x === "-") {
				stack.push(left - right);
			} else if (x === "*") {
				stack.push(left * right);
			} else {
				stack.push(left / right);
			}
		} else {
			stack.push(Number(x));
		}
	}

	return stack[0];
}

// solution2
const calculate = (num1, num2, operator) => {
	switch (operator) {
		case "+":
			return num1 + num2;

		case "-":
			return num1 - num2;

		case "*":
			return num1 * num2;

		case "/":
			return num1 / num2;
	}
};

function solution(s) {
	const stack = [];

	[...s].forEach((element) => {
		if (isNaN(element)) {
			const [num2, num1] = [stack.pop(), stack.pop()].map(Number);
			// const num2 = Number(stack.pop());
			// const num1 = Number(stack.pop());
			const result = calculate(num1, num2, element);

			stack.push(result);
		} else {
			stack.push(element);
		}
	});

	return stack[0];
}

// 테스트 케이스
console.log(solution("352+*9-")); // 12
