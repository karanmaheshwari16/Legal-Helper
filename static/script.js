async function submitQuery() {
    const query = document.getElementById('query').value;
    const response = document.getElementById('response');
    response.innerText = 'Processing...';

    try {
        const result = await fetch('/query', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: query })
        });
        const data = await result.json();
        response.innerText = data.response;
    } catch (error) {
        response.innerText = 'Error: ' + error.message;
    }
}

async function updateDatabase() {
    const response = document.getElementById('response');
    response.innerText = 'Updating database...';

    try {
        const result = await fetch('/update_database', {
            method: 'POST'
        });
        const data = await result.json();
        response.innerText = data.message;
    } catch (error) {
        response.innerText = 'Error: ' + error.message;
    }
}