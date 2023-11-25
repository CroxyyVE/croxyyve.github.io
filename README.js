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
