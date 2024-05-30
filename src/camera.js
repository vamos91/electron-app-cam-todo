const video = document.querySelector('.camera')

navigator.mediaDevices.getUserMedia({video: true})
.then((stream) => {
    video.srcObject = stream
})