function countSumOfFirstHalf(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Please provide an array.");
        return;
    }
    const halfIndex = Math.ceil(numbers.length / 2);

    return numbers.filter((_, index) => index < halfIndex).reduce((acc, item) => acc + item, 0);
}