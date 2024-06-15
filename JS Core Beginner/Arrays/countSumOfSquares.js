function countSumOfSquares(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Please provide an array.");
        return;
    }

    const sum = numbers.reduce((acc, item) => {
        if (typeof item !== 'number' || isNaN(item)) {
            console.log(`Element ${item} is not a valid number.`);
            return acc;
        }

        return acc + item * item;
    }, 0);

    return sum;
}