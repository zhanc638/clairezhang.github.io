      const video = document.querySelector('.fullscreen-video');

        // Ensure video loops continuously
        video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play();
        });

        // Optional control functions (remove if not using controls)
        function togglePlay() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }

        function toggleMute() {
            video.muted = !video.muted;
        }

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        }

        // Prevent right-click context menu on video
        video.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        // Optional: Hide cursor after inactivity
        let timeout;
        document.addEventListener('mousemove', () => {
            document.body.style.cursor = 'default';
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                document.body.style.cursor = 'none';
            }, 3000);
        });

        // Optional: Add parallax effect to text on mouse move
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            // const title = document.querySelector('.main-title');
            // const subtitle = document.querySelector('.subtitle');
            
            // title.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
            // subtitle.style.transform = `translate(${mouseX * 5}px, ${mouseY * 5}px)`;
        });
        
const audio = document.getElementById('background-audio');
        // Ensure audio loops continuously
audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
});
// Handle autoplay restrictions (browsers may block autoplay)
// Attempt to play audio when user interacts with the page
const playAudio = () => {
    audio.play().catch(e => {
        console.log('Audio autoplay prevented:', e);
        // Audio will play after user interaction
    });
};

// Try to play immediately
playAudio();

// Fallback: play on first user interaction
document.addEventListener('click', playAudio, { once: true });
document.addEventListener('keydown', playAudio, { once: true });

document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-audio-button');
    const audio = document.getElementById('background-audio');
    const video = document.getElementById('background-video');
    // Fade in the button after page loads

    setTimeout(function() {
        playButton.classList.add('visible');
    }, 100);
    
    playButton.addEventListener('click', function() {
        audio.play();
        video.currentTime = 0;
        video.play();
        playButton.classList.remove('visible');
        playButton.classList.add('hidden');
    });
});