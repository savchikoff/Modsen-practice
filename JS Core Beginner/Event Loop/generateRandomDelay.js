function generateRandomDelay() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;

        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(randomNumber);
            } else {
                reject(new Error(`Generated number ${randomNumber} is greater than 5`));
            }
        }, randomNumber * 1000);
    });
}

generateRandomDelay()
    .then(result => console.log(`Promise resolved with value: ${result}`))
    .catch(error => console.error(`Promise rejected with error: ${error.message}`));