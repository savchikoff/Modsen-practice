function printLastStringSymbol(str) {
    if (typeof str !== 'string' || str.length === 0) {
        console.log("Please provide a non-empty string.");
        return;
    }

    console.log(str[str.length - 1]);
}