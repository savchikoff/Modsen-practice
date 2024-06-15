function printSumOfFirstAndLastDigit(num) {
    if (typeof number !== 'number' || isNaN(number)) {
        console.log("Please provide a valid number.");
        return;
    }

    if (!Number.isInteger(number)) {
        console.log("Please provide an integer.");
        return;
    }

    if (number < 0) {
        number = Math.abs(number);
    }

    const numStr = num.toString();

    const firstDigit = parseInt(numStr.charAt(0));
    const lastDigit = parseInt(numStr.charAt(numStr.length - 1));

    const sum = firstDigit + lastDigit;

    console.log(sum);
}