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
        return "invalid input";
    }
    const fiboArray = [];

    function fiboRecurs(index) {
        if (index < 2) {
            fiboArray[index] = index;
            return index;
        } else {
            const fibNumber = fiboRecurs(index - 1) + fiboRecurs(index - 2);
            fiboArray[index] = fibNumber;
            return fibNumber;
        }
    }
    fiboRecurs(n);
    return fiboArray;

}