function fetchContent(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function fetchMultipleURLs(urls) {
    const promises = urls.map(url => fetchContent(url));

    return Promise.all(promises);
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchMultipleURLs(urls)
    .then(responses => {
        responses.forEach((response, index) => {
            console.log(`Content of URL ${index + 1}:`, response);
        });
    })
    .catch(error => {
        console.error('Error fetching URLs:', error);
    });