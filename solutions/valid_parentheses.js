/**
 * @param {string} s
 * @return {boolean}
 */
module.exports = function(s) {
    const stack = [];
    for (const ch of s) {
        if (ch == '(' || ch == '{' || ch == '[') {
            stack.push(ch);
        } else if (stack.length == 0) {
            return false;
        }
        switch(ch) {
            case ')':
                if (stack.slice(-1) == '(') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case '}':
                if (stack.slice(-1) == '{') {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case ']':
                if (stack.slice(-1) == '[') {
                    stack.pop();
                } else {
                    return false;
                }
        }
    }

    return stack.length == 0;
};