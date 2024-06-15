function fetchDataFromAPI(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            console.error('Error fetching data:', error);
            return null;
        });
}

async function fetchMultipleAPIs(urls) {
    const promises = urls.map(url => fetchDataFromAPI(url));

    return Promise.all(promises)
        .then(responses => {
            return responses.filter(response => response !== null);
        })
        .catch(error => {
            console.error('Error fetching APIs:', error);
            return [];
        });
}

const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://dummyjson.com/test',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleAPIs(apiUrls)
    .then(results => {
        console.log('Combined results:', results);
    })
    .catch(error => {
        console.error('Error fetching multiple APIs:', error);
    });