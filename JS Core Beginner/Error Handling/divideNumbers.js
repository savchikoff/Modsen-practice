function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Zero division is impossible');
        }
        return a / b;
    } catch (error) {
        console.error('Error:', error.message);
    }
}