document.addEventListener('DOMContentLoaded', function () {
    function timeToSeconds(time) {
        const [hours = 0, minutes = 0, seconds = 0] = time.split(':').map(Number);
        return (hours * 3600) + (minutes * 60) + seconds;
    }

    // Surah data with lengths in seconds and revelation orders
    const surahList = [
        // Include your surahList data here
    ];

    // Juz data mapping juz number to surah numbers
    const juzData = [
        // Include your juzData here
    ];

    const ul = document.getElementById('surahList');
    const juzContainer = document.getElementById('juzList');
    const audioPlayer = new Audio();
    let currentSurahIndex = -1;
    let playCount = 1;
    let currentPlayCount = 1;
    let repeatCount = 1;
    let currentRepeatCount = 1;

    // Playlist variables
    let playlist = [];
    let currentPlaylistIndex = 0;
    let isPlaylistPlaying = false;

    // Populate the surah list
    function populateSurahList(list = surahList) {
        ul.style.display = 'block';
        juzContainer.style.display = 'none';
        ul.innerHTML = ''; // Clear existing list
        list.forEach((surah) => {
            const li = createSurahListItem(surah);
            ul.appendChild(li);
        });
    }

    // Create Surah List Item
    function createSurahListItem(surah) {
        const li = document.createElement('li');
        li.innerHTML = `<span class="surah-name">${surah.number}. ${surah.name} (${formatTime(surah.length)})</span><span class="three-dots">&#x22EE;</span>`;
        li.addEventListener('click', () => {
            currentSurahIndex = surahList.findIndex(s => s.number === surah.number);
            currentPlayCount = playCount; // Reset play count
            currentRepeatCount = repeatCount; // Reset repeat count
            isPlaylistPlaying = false; // Not playing from playlist
            playSurah();
        });

        const menu = document.getElementById('menuTemplate').cloneNode(true);
        menu.id = `menu-${surah.number}`;
        menu.querySelector('#menuSurahName').textContent = surah.name;
        const playCountSlider = menu.querySelector('#surahPlayCount');
        const playCountValue = menu.querySelector('#surahPlayCountValue');

        playCountSlider.max = 31; // Set max to 31 (30 + infinite)
        playCountSlider.addEventListener('input', function () {
            playCount = parseInt(this.value);
            if (playCount == 31) {
                playCountValue.textContent = 'infinite';
            } else {
                playCountValue.textContent = playCount;
            }
        });
        menu.querySelector('#closeMenuButton').addEventListener('click', () => {
            menu.style.display = 'none';
        });

        li.querySelector('.three-dots').addEventListener('click', (event) => {
            event.stopPropagation();
            const rect = li.getBoundingClientRect();
            menu.style.display = 'block';
            menu.style.top = `${rect.bottom + window.scrollY}px`;
            menu.style.left = `${rect.left + window.scrollX}px`;
        });

        document.body.appendChild(menu);
        return li;
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${hours > 0 ? String(hours).padStart(2, '0') + ':' : ''}${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function playSurah() {
        if (currentSurahIndex >= 0 && currentSurahIndex < surahList.length) {
            const surahNumber = surahList[currentSurahIndex].number;
            // Update the path to include 'assets/'
            audioPlayer.src = `assets/${String(surahNumber).padStart(3, '0')}.mp3`;
            audioPlayer.play();
            document.getElementById('bottomTrackTitle').textContent = surahList[currentSurahIndex].name;
            document.getElementById('playPauseButton').innerHTML = '&#9208;'; // Pause icon
            updateProgressBar();
        }
    }

    // The rest of your JavaScript code remains the same...

    populateSurahList();
});
