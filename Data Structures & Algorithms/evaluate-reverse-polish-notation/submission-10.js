class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            const val = tokens[i];

            if (!["+", "-", "*", "/"].includes(val)) {
                stack.push(val);
            } else {
                let num2 = Number(stack.pop())
                let num1 = Number(stack.pop());
                switch (val) {
                    case "+":
                        stack.push(num1 + num2);
                        break;
                    case "-":
                        stack.push(num1 - num2);
                        break;
                    case "*":
                        stack.push(num1 * num2);
                        break;
                    case "/":
                        stack.push(Math.trunc(num1 / num2));
                        break;
                    default:
                        break;
                }
            }
        }
        return stack[0];
    }
}
