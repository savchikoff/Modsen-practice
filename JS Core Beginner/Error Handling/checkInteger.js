function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error('The value entered is not an integer.');
    } else {
        return true;
    }
}