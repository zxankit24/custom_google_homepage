function updateBackgroundImage() {
    fetch('https://source.unsplash.com/random/1920x1080')
        .then((response) => {
            if (response.ok) {
                document.body.style.backgroundImage = `url(${response.url})`;
            } else {
                console.error('Error fetching background image:', response.status);
            }
        })
        .catch((error) => {
            console.error('Error fetching background image:', error);
        });
}

document.addEventListener('DOMContentLoaded', function() {
    updateBackgroundImage();

    // ... rest of your code ...
});


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchForm = document.querySelector('form');

    // Focus the search input when the page loads
    searchInput.focus();

    // Listen for the "Enter" key press and submit the search form
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchForm.submit();
        }
    });
});
