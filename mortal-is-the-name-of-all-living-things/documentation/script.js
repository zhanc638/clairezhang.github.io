const audio = document.getElementById('audio');
        const playButton = document.getElementById('playButton');
        const progressBar = document.getElementById('progressBar');
        const progressContainer = document.getElementById('progressContainer');
        const currentTimeDisplay = document.getElementById('currentTime');
        const durationDisplay = document.getElementById('duration');
        const volumeSlider = document.getElementById('volumeSlider');

        // Set initial volume
        audio.volume = 0.7;

        // Play/Pause functionality
        playButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playButton.textContent = '⏸';
            } else {
                audio.pause();
                playButton.textContent = '▶';
            }
        });

        // Update progress bar
        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = progress + '%';
            currentTimeDisplay.textContent = formatTime(audio.currentTime);
        });

        // Set duration when metadata loads
        audio.addEventListener('loadedmetadata', () => {
            durationDisplay.textContent = formatTime(audio.duration);
        });

        // Seek functionality
        progressContainer.addEventListener('click', (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            audio.currentTime = percent * audio.duration;
        });

        // Volume control
        volumeSlider.addEventListener('input', (e) => {
            audio.volume = e.target.value / 100;
        });

        // Reset button when audio ends
        audio.addEventListener('ended', () => {
            playButton.textContent = '▶';
        });

        // Format time helper
        function formatTime(seconds) {
            if (isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }