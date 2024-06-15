function repeatOperation(operation, interval, repetitions) {
    let count = 0;
    const intervalId = setInterval(() => {
        operation();
        count++;

        if (count === repetitions) {
            clearInterval(intervalId);
        }
    }, interval);
}