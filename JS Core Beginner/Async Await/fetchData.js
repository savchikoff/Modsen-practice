async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function fetchRemoteData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    try {
        const data = await fetchData(apiUrl);
        console.log('Received data:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

fetchRemoteData()
    .then(result => {
        console.log('Process result:', result);
    })
    .catch(error => {
        console.error('Main error handler:', error);
    });
