function increaseByTenPercent(numbers) {
    if (!Array.isArray(numbers)) {
        console.log("Please provide an array.");
        return;
    }

    if (numbers.length === 0) {
        console.log("The array is empty.");
        return;
    }

    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number' || isNaN(numbers[i])) {
            console.log(`Element at index ${i} is not a valid number.`);
            return;
        }

        const increasedValue = numbers[i] * 1.1;
        result.push(increasedValue);
    }

    return result;
}