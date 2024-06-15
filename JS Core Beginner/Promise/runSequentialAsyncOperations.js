function asyncOperation1() {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            console.log('Async Operation 1 done');
            resolve('Result of async operation 1');
        }, 1000);
    });
}

function asyncOperation2() {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            console.log('Async Operation 2 done');
            resolve('Result of async operation 2');
        }, 1500);
    });
}

function asyncOperation3() {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            console.log('Async Operation 3 done');
            resolve('Result of async operation 3');
        }, 500);
    });
}

function runSequentialAsyncOperations() {
    asyncOperation1()
        .then(result1 => {
            console.log(result1);
            return asyncOperation2();
        })
        .then(result2 => {
            console.log(result2);
            return asyncOperation3();
        })
        .then(result3 => {
            console.log(result3);
            console.log('All operations completed');
        })
        .catch(error => {
            console.error('Error during async operations:', error);
        });
}

runSequentialAsyncOperations();