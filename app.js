// Function to load pages dynamically into the main content area
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = `<h2>Page not found</h2>`;
        });
}
