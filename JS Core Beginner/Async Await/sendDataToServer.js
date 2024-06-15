async function loadDataFromServer1(url1) {
    try {
        const response1 = await fetch(url1);
        if (!response1.ok) {
            throw new Error(`Failed to load data from Server 1: ${response1.status}`);
        }
        const data1 = await response1.json();
        return data1;
    } catch (error) {
        console.error('Error loading data from Server 1:', error);
        throw error;
    }
}

async function sendDataToServer2(url2, data) {
    try {
        const response2 = await fetch(url2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response2.ok) {
            throw new Error(`Failed to send data to Server 2: ${response2.status}`);
        }
        const responseData = await response2.json();
        return responseData;
    } catch (error) {
        console.error('Error sending data to Server 2:', error);
        throw error;
    }
}

async function loadDataAndSendToServer(url1, url2) {
    try {
        const dataFromServer1 = await loadDataFromServer1(url1);

        const response = await sendDataToServer2(url2, dataFromServer1);

        console.log('Response from Server 2:', response);
        return response;
    } catch (error) {
        console.error('Error in sequence:', error);
        return null;
    }
}

const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts';

loadDataAndSendToServer(url1, url2)
    .then(result => {
        console.log('Process result:', result);
    })
    .catch(error => {
        console.error('Main error handler:', error);
    });
