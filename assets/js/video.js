export default function video() {
    const video = document.querySelector('.video-block__video');
    const btnPlay = document.querySelector('.video-block__btn');
    const classHidden = document.querySelector('.video-block__btn_hidden');

    const startVideo = () => {
        if (!classHidden) {
            btnPlay.classList.add('video-block__btn_hidden');
            video.setAttribute('controls', 'true');
            video.play();
        }
    }

    const pauseVideo = () => {
        if (video.play) {
            video.pause();
            btnPlay.classList.remove('video-block__btn_hidden');
            video.removeAttribute('controls', 'true');
        }
    }

    btnPlay.addEventListener('click', startVideo);
    video.addEventListener('click', pauseVideo);

    const isVideoEnded = () => {
        if (video.ended) {
            btnPlay.classList.remove('video-block__btn_hidden');
            video.removeAttribute('controls');
        }
    }

    video.addEventListener('ended', isVideoEnded);
}
