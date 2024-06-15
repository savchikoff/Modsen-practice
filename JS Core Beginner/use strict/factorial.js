function factorial(n) {
    "use strict";

    if (n < 0) {
        throw new Error("Факториал не определен для отрицательных чисел");
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}