<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Croxyy - YouTube Channel</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <div class="container">
            <h1>Croxyy</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#videos">Videos</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="home">
        <div class="container">
            <h2>Welcome to Croxyy's YouTube Channel</h2>
            <p>Explore the world of marketable accessories and stay tuned for exciting videos!</p>
            <!-- Add more content as needed -->
        </div>
    </section>

    <section id="products">
        <div class="container">
            <h2>Featured Products</h2>
            <p>Discover our exclusive line of marketable accessories.</p>
            <!-- Add product details and images -->
        </div>
    </section>

    <section id="videos">
        <div class="container">
            <h2>Latest Videos</h2>
            <div id="video-list"></div>
            <!-- JavaScript will populate this with YouTube video data -->
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contact Us</h2>
            <!-- Add a contact form or any other contact information -->
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 Croxyy. All Rights Reserved.</p>
        </div>
    </footer>

    <script src="https://apis.google.com/js/api.js"></script>
    <script src="script.js"></script>
</body>

</html>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

nav a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
}

section {
    margin: 40px 0;
}

h2 {
    color: #333;
}

footer {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}
// Load the YouTube API
gapi.load('client', init);

function init() {
    // Initialize the client with API key
    gapi.client.init({
        'apiKey': 'YOUR_YOUTUBE_API_KEY',
    }).then(function () {
        // Call the YouTube Data API to fetch the latest videos
        return gapi.client.request({
            'path': 'https://www.googleapis.com/youtube/v3/playlistItems',
            'params': {
                'part': 'snippet',
                'maxResults': 5,
                'playlistId': 'YOUR_PLAYLIST_ID',
            },
        });
    }).then(function (response) {
        // Handle the response and display video thumbnails and titles
        const videosContainer = document.getElementById('video-list');
        response.result.items.forEach(function (item) {
            const videoTitle = item.snippet.title;
            const videoId = item.snippet.resourceId.videoId;
            const thumbnailUrl = item.snippet.thumbnails.default.url;

            const videoElement = document.createElement('div');
            videoElement.innerHTML = `
                <div>
                    <img src="${thumbnailUrl}" alt="${videoTitle}">
                    <p>${videoTitle}</p>
                </div>
            `;

            videosContainer.appendChild(videoElement);
        });
    });
}
