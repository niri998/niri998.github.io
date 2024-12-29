document.getElementById('flowerButton').addEventListener('click', function() {
    // Hide the button and show the surprise section
    document.getElementById('flowerButton').style.display = 'none';
    document.getElementById('interactiveSection').classList.remove('hidden');

    // Display the GIF
    var gifElement = document.getElementById('surpriseGif');
    gifElement.src = 'https://media1.tenor.com/m/E4auL-XxaaYAAAAd/floreyonce-cat.gif';  // Replace with your GIF URL or file path
    gifElement.classList.remove('hidden');
});
