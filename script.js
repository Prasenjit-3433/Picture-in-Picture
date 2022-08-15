const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promts user to select a media strem, pass to video element, then play
async function selectMediaStream() {
    try {
        // mediaStream data: we're waiting untill the user actually select which screen or window he want to share:
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Passing the mediaStream into our video object as its source object
        videoElement.srcObject = mediaStream;
        // 'loadedmetadata' event occurs when meta data for the specified audio/video has been loaded
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch (error) {
        // Catch Error....
        console.log('whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable the button 
    button.disabled = true;
    // Start Picture-in-Picture
    await videoElement.requestPictureInPicture();
    // Reset the Button
    button.disabled = false;
});

// On Load
selectMediaStream();