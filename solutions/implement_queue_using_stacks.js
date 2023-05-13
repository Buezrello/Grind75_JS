var MyQueue = function() {
    this.stack = [];
    this.temp_stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.stack?.length) {
        this.temp_stack.push(this.stack.pop());
    }
    this.stack.push(x);
    while (this.temp_stack?.length) {
        this.stack.push(this.temp_stack.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack?.length ? true : false;
};
