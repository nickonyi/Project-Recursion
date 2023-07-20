function fibSequence(n) {
    //checkout if the number is valid
    if (n <= 0) {
        return "Invalid input!fibonacci starts at position 1";
    }
    //initialize an array with two values 0 and 1
    const fib = [0, 1];
    //start the loop at position 2
    //calculate the fibonacci at each position of an array by summing up the 
    //two previous numbers
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    //return the array
    return fib;

}


function fibonacciRecursive(n) {
    if (n <= 0) {
        return "Invalid input";
    }

    const fibArray = [0, 1];

    function fibonacciHelper(index) {
        if (index <= 1) {
            return index;
        } else {
            const fibNumber = fibonacciHelper(index - 1) + fibonacciHelper(index - 2);
            fibArray[index] = fibNumber;
            return fibNumber;
        }
    }
    fibonacciHelper(n);
    return fibArray;
}

function fibonacciRecursiveArray(n) {
    if (n <= 0) {
        return 'Invalid input. Fibonacci sequence starts from index 1.';
    }

    const fibArray = [];

    function fibonacciRecursiveHelper(index) {
        if (index <= 1) {
            return index;
        } else {
            const fibNumber = fibonacciRecursiveHelper(index - 1) + fibonacciRecursiveHelper(index - 2);
            fibArray[index] = fibNumber;
            return fibNumber;
        }
    }

    fibonacciRecursiveHelper(n);

    return fibArray;
}