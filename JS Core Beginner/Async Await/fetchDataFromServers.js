async function loadDataFromServers(urls) {
    try {
        const promises = urls.map(url => fetch(url));

        const responses = await Promise.all(promises);

        const dataPromises = responses.map(response => response.json());

        const dataArray = await Promise.all(dataPromises);

        return dataArray;
    } catch (error) {
        console.error('Error loading data from servers:', error);
        throw error;
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

loadDataFromServers(urls)
    .then(dataArray => {
        console.log('Data loaded successfully:', dataArray);
    })
    .catch(error => {
        console.error('Main error handler:', error);
    });
