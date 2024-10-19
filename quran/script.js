document.addEventListener('DOMContentLoaded', function () {
    function timeToSeconds(time) {
        const [hours = 0, minutes = 0, seconds = 0] = time.split(':').map(Number);
        return (hours * 3600) + (minutes * 60) + seconds;
    }

    // Surah data with lengths in seconds and revelation orders
    const surahList = [
        { number: 1, name: "Al-Fatiha", length: timeToSeconds("0:00:52"), revelationOrder: 5 },
        { number: 2, name: "Al-Baqarah", length: timeToSeconds("2:06:16"), revelationOrder: 87 },
        { number: 3, name: "Aal-E-Imran", length: timeToSeconds("1:18:45"), revelationOrder: 89 },
        { number: 4, name: "An-Nisa", length: timeToSeconds("1:19:57"), revelationOrder: 92 },
        { number: 5, name: "Al-Ma'idah", length: timeToSeconds("1:03:01"), revelationOrder: 112 },
        { number: 6, name: "Al-An'am", length: timeToSeconds("1:12:30"), revelationOrder: 55 },
        { number: 7, name: "Al-A'raf", length: timeToSeconds("1:23:15"), revelationOrder: 39 },
        { number: 8, name: "Al-Anfal", length: timeToSeconds("0:30:38"), revelationOrder: 88 },
        { number: 9, name: "At-Tawbah", length: timeToSeconds("1:00:25"), revelationOrder: 113 },
        { number: 10, name: "Yunus", length: timeToSeconds("0:45:13"), revelationOrder: 51 },
        { number: 11, name: "Hud", length: timeToSeconds("0:46:26"), revelationOrder: 52 },
        { number: 12, name: "Yusuf", length: timeToSeconds("0:42:05"), revelationOrder: 53 },
        { number: 13, name: "Ar-Ra'd", length: timeToSeconds("0:20:31"), revelationOrder: 96 },
        { number: 14, name: "Ibrahim", length: timeToSeconds("0:20:27"), revelationOrder: 72 },
        { number: 15, name: "Al-Hijr", length: timeToSeconds("0:15:55"), revelationOrder: 54 },
        { number: 16, name: "An-Nahl", length: timeToSeconds("0:42:24"), revelationOrder: 70 },
        { number: 17, name: "Al-Isra", length: timeToSeconds("0:35:14"), revelationOrder: 50 },
        { number: 18, name: "Al-Kahf", length: timeToSeconds("0:33:30"), revelationOrder: 69 },
        { number: 19, name: "Maryam", length: timeToSeconds("0:21:23"), revelationOrder: 44 },
        { number: 20, name: "Ta-Ha", length: timeToSeconds("0:27:08"), revelationOrder: 45 },
        { number: 21, name: "Al-Anbiya", length: timeToSeconds("0:26:25"), revelationOrder: 73 },
        { number: 22, name: "Al-Hajj", length: timeToSeconds("0:29:32"), revelationOrder: 103 },
        { number: 23, name: "Al-Mu'minun", length: timeToSeconds("0:25:00"), revelationOrder: 74 },
        { number: 24, name: "An-Nur", length: timeToSeconds("0:30:41"), revelationOrder: 102 },
        { number: 25, name: "Al-Furqan", length: timeToSeconds("0:18:22"), revelationOrder: 42 },
        { number: 26, name: "Ash-Shu'ara", length: timeToSeconds("0:30:47"), revelationOrder: 47 },
        { number: 27, name: "An-Naml", length: timeToSeconds("0:26:12"), revelationOrder: 48 },
        { number: 28, name: "Al-Qasas", length: timeToSeconds("0:31:44"), revelationOrder: 49 },
        { number: 29, name: "Al-Ankabut", length: timeToSeconds("0:21:25"), revelationOrder: 85 },
        { number: 30, name: "Ar-Rum", length: timeToSeconds("0:19:31"), revelationOrder: 84 },
        { number: 31, name: "Luqman", length: timeToSeconds("0:11:55"), revelationOrder: 57 },
        { number: 32, name: "As-Sajdah", length: timeToSeconds("0:08:44"), revelationOrder: 75 },
        { number: 33, name: "Al-Ahzab", length: timeToSeconds("0:29:17"), revelationOrder: 90 },
        { number: 34, name: "Saba", length: timeToSeconds("0:19:03"), revelationOrder: 58 },
        { number: 35, name: "Fatir", length: timeToSeconds("0:17:37"), revelationOrder: 43 },
        { number: 36, name: "Ya-Sin", length: timeToSeconds("0:17:40"), revelationOrder: 41 },
        { number: 37, name: "As-Saffat", length: timeToSeconds("0:24:24"), revelationOrder: 56 },
        { number: 38, name: "Sad", length: timeToSeconds("0:17:50"), revelationOrder: 38 },
        { number: 39, name: "Az-Zumar", length: timeToSeconds("0:27:10"), revelationOrder: 59 },
        { number: 40, name: "Ghafir", length: timeToSeconds("0:26:22"), revelationOrder: 60 },
        { number: 41, name: "Fussilat", length: timeToSeconds("0:19:20"), revelationOrder: 61 },
        { number: 42, name: "Ash-Shura", length: timeToSeconds("0:19:30"), revelationOrder: 62 },
        { number: 43, name: "Az-Zukhruf", length: timeToSeconds("0:20:28"), revelationOrder: 63 },
        { number: 44, name: "Ad-Dukhan", length: timeToSeconds("0:09:51"), revelationOrder: 64 },
        { number: 45, name: "Al-Jathiyah", length: timeToSeconds("0:10:52"), revelationOrder: 65 },
        { number: 46, name: "Al-Ahqaf", length: timeToSeconds("0:15:57"), revelationOrder: 66 },
        { number: 47, name: "Muhammad", length: timeToSeconds("0:12:18"), revelationOrder: 95 },
        { number: 48, name: "Al-Fath", length: timeToSeconds("0:12:02"), revelationOrder: 111 },
        { number: 49, name: "Al-Hujurat", length: timeToSeconds("0:08:35"), revelationOrder: 106 },
        { number: 50, name: "Qaf", length: timeToSeconds("0:09:20"), revelationOrder: 34 },
        { number: 51, name: "Adh-Dhariyat", length: timeToSeconds("0:09:05"), revelationOrder: 67 },
        { number: 52, name: "At-Tur", length: timeToSeconds("0:08:05"), revelationOrder: 76 },
        { number: 53, name: "An-Najm", length: timeToSeconds("0:07:41"), revelationOrder: 23 },
        { number: 54, name: "Al-Qamar", length: timeToSeconds("0:08:03"), revelationOrder: 37 },
        { number: 55, name: "Ar-Rahman", length: timeToSeconds("0:11:19"), revelationOrder: 97 },
        { number: 56, name: "Al-Waqi'ah", length: timeToSeconds("0:11:57"), revelationOrder: 46 },
        { number: 57, name: "Al-Hadid", length: timeToSeconds("0:13:43"), revelationOrder: 94 },
        { number: 58, name: "Al-Mujadila", length: timeToSeconds("0:10:13"), revelationOrder: 105 },
        { number: 59, name: "Al-Hashr", length: timeToSeconds("0:10:27"), revelationOrder: 101 },
        { number: 60, name: "Al-Mumtahanah", length: timeToSeconds("0:07:31"), revelationOrder: 91 },
        { number: 61, name: "As-Saff", length: timeToSeconds("0:04:53"), revelationOrder: 109 },
        { number: 62, name: "Al-Jumu'ah", length: timeToSeconds("0:03:34"), revelationOrder: 110 },
        { number: 63, name: "Al-Munafiqun", length: timeToSeconds("0:04:18"), revelationOrder: 104 },
        { number: 64, name: "At-Taghabun", length: timeToSeconds("0:05:25"), revelationOrder: 108 },
        { number: 65, name: "At-Talaq", length: timeToSeconds("0:06:01"), revelationOrder: 99 },
        { number: 66, name: "At-Tahrim", length: timeToSeconds("0:06:12"), revelationOrder: 107 },
        { number: 67, name: "Al-Mulk", length: timeToSeconds("0:07:35"), revelationOrder: 77 },
        { number: 68, name: "Al-Qalam", length: timeToSeconds("0:07:36"), revelationOrder: 2 },
        { number: 69, name: "Al-Haqqah", length: timeToSeconds("0:06:46"), revelationOrder: 78 },
        { number: 70, name: "Al-Ma'arij", length: timeToSeconds("0:05:18"), revelationOrder: 79 },
        { number: 71, name: "Nuh", length: timeToSeconds("0:04:41"), revelationOrder: 71 },
        { number: 72, name: "Al-Jinn", length: timeToSeconds("0:05:35"), revelationOrder: 40 },
        { number: 73, name: "Al-Muzzammil", length: timeToSeconds("0:04:04"), revelationOrder: 3 },
        { number: 74, name: "Al-Muddaththir", length: timeToSeconds("0:05:24"), revelationOrder: 4 },
        { number: 75, name: "Al-Qiyamah", length: timeToSeconds("0:03:32"), revelationOrder: 31 },
        { number: 76, name: "Al-Insan", length: timeToSeconds("0:05:15"), revelationOrder: 98 },
        { number: 77, name: "Al-Mursalat", length: timeToSeconds("0:04:59"), revelationOrder: 33 },
        { number: 78, name: "An-Naba", length: timeToSeconds("0:04:52"), revelationOrder: 80 },
        { number: 79, name: "An-Nazi'at", length: timeToSeconds("0:04:16"), revelationOrder: 81 },
        { number: 80, name: "Abasa", length: timeToSeconds("0:03:40"), revelationOrder: 24 },
        { number: 81, name: "At-Takwir", length: timeToSeconds("0:02:38"), revelationOrder: 7 },
        { number: 82, name: "Al-Infitar", length: timeToSeconds("0:02:17"), revelationOrder: 82 },
        { number: 83, name: "Al-Mutaffifin", length: timeToSeconds("0:05:10"), revelationOrder: 86 },
        { number: 84, name: "Al-Inshiqaq", length: timeToSeconds("0:02:40"), revelationOrder: 83 },
        { number: 85, name: "Al-Buruj", length: timeToSeconds("0:03:18"), revelationOrder: 27 },
        { number: 86, name: "At-Tariq", length: timeToSeconds("0:01:40"), revelationOrder: 36 },
        { number: 87, name: "Al-A'la", length: timeToSeconds("0:01:48"), revelationOrder: 8 },
        { number: 88, name: "Al-Ghashiyah", length: timeToSeconds("0:02:14"), revelationOrder: 68 },
        { number: 89, name: "Al-Fajr", length: timeToSeconds("0:03:33"), revelationOrder: 10 },
        { number: 90, name: "Al-Balad", length: timeToSeconds("0:02:00"), revelationOrder: 35 },
        { number: 91, name: "Ash-Shams", length: timeToSeconds("0:01:24"), revelationOrder: 26 },
        { number: 92, name: "Al-Lail", length: timeToSeconds("0:01:52"), revelationOrder: 9 },
        { number: 93, name: "Ad-Duha", length: timeToSeconds("0:01:05"), revelationOrder: 11 },
        { number: 94, name: "Al-Inshirah", length: timeToSeconds("0:00:43"), revelationOrder: 12 },
        { number: 95, name: "At-Tin", length: timeToSeconds("0:01:05"), revelationOrder: 28 },
        { number: 96, name: "Al-Alaq", length: timeToSeconds("0:01:35"), revelationOrder: 1 },
        { number: 97, name: "Al-Qadr", length: timeToSeconds("0:00:45"), revelationOrder: 25 },
        { number: 98, name: "Al-Bayyinah", length: timeToSeconds("0:02:06"), revelationOrder: 100 },
        { number: 99, name: "Az-Zalzalah", length: timeToSeconds("0:01:00"), revelationOrder: 93 },
        { number: 100, name: "Al-Adiyat", length: timeToSeconds("0:01:10"), revelationOrder: 14 },
        { number: 101, name: "Al-Qari'ah", length: timeToSeconds("0:01:03"), revelationOrder: 30 },
        { number: 102, name: "At-Takathur", length: timeToSeconds("0:01:03"), revelationOrder: 16 },
        { number: 103, name: "Al-Asr", length: timeToSeconds("0:00:27"), revelationOrder: 13 },
        { number: 104, name: "Al-Humazah", length: timeToSeconds("0:00:58"), revelationOrder: 32 },
        { number: 105, name: "Al-Fil", length: timeToSeconds("0:00:49"), revelationOrder: 19 },
        { number: 106, name: "Quraish", length: timeToSeconds("0:00:43"), revelationOrder: 29 },
        { number: 107, name: "Al-Ma'un", length: timeToSeconds("0:00:58"), revelationOrder: 17 },
        { number: 108, name: "Al-Kauthar", length: timeToSeconds("0:00:25"), revelationOrder: 15 },
        { number: 109, name: "Al-Kafirun", length: timeToSeconds("0:00:54"), revelationOrder: 18 },
        { number: 110, name: "An-Nasr", length: timeToSeconds("0:00:35"), revelationOrder: 114 },
        { number: 111, name: "Al-Masad", length: timeToSeconds("0:00:42"), revelationOrder: 6 },
        { number: 112, name: "Al-Ikhlas", length: timeToSeconds("0:00:22"), revelationOrder: 22 },
        { number: 113, name: "Al-Falaq", length: timeToSeconds("0:00:33"), revelationOrder: 20 },
        { number: 114, name: "An-Nas", length: timeToSeconds("0:00:50"), revelationOrder: 21 }
    ];

    // Juz data mapping juz number to surah numbers
    const juzData = [
        { juzNumber: 1, surahs: [1, 2] },
        { juzNumber: 2, surahs: [2] },
        { juzNumber: 3, surahs: [2, 3] },
        { juzNumber: 4, surahs: [3, 4] },
        { juzNumber: 5, surahs: [4] },
        { juzNumber: 6, surahs: [4, 5] },
        { juzNumber: 7, surahs: [5, 6] },
        { juzNumber: 8, surahs: [6, 7] },
        { juzNumber: 9, surahs: [7, 8] },
        { juzNumber: 10, surahs: [8, 9] },
        { juzNumber: 11, surahs: [9, 10, 11] },
        { juzNumber: 12, surahs: [11, 12] },
        { juzNumber: 13, surahs: [12, 13, 14, 15] },
        { juzNumber: 14, surahs: [15, 16] },
        { juzNumber: 15, surahs: [17, 18] },
        { juzNumber: 16, surahs: [18, 19, 20] },
        { juzNumber: 17, surahs: [21, 22] },
        { juzNumber: 18, surahs: [23, 24, 25] },
        { juzNumber: 19, surahs: [25, 26, 27] },
        { juzNumber: 20, surahs: [27, 28, 29] },
        { juzNumber: 21, surahs: [29, 30, 31, 32, 33] },
        { juzNumber: 22, surahs: [33, 34, 35, 36] },
        { juzNumber: 23, surahs: [36, 37, 38, 39] },
        { juzNumber: 24, surahs: [39, 40, 41] },
        { juzNumber: 25, surahs: [41, 42, 43, 44, 45, 46] },
        { juzNumber: 26, surahs: [46, 47, 48, 49, 50, 51] },
        { juzNumber: 27, surahs: [51, 52, 53, 54, 55, 56, 57] },
        { juzNumber: 28, surahs: [58, 59, 60, 61, 62, 63, 64, 65, 66] },
        { juzNumber: 29, surahs: [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77] },
        { juzNumber: 30, surahs: [78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114] }
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

    document.getElementById('sortDefaultOrder').addEventListener('click', () => {
        surahList.sort((a, b) => a.number - b.number);
        populateSurahList();
    });

    document.getElementById('sortShortestToLongest').addEventListener('click', () => {
        surahList.sort((a, b) => a.length - b.length);
        populateSurahList();
    });

    document.getElementById('sortLongestToShortest').addEventListener('click', () => {
        surahList.sort((a, b) => b.length - a.length);
        populateSurahList();
    });

    document.getElementById('sortRevelationOrder').addEventListener('click', () => {
        surahList.sort((a, b) => a.revelationOrder - b.revelationOrder);
        populateSurahList();
    });

    // Juz Sorting
    document.getElementById('sortByJuz').addEventListener('click', () => {
        ul.style.display = 'none';
        juzContainer.style.display = 'block';
        document.getElementById('playlistDisplay').style.display = 'none';
        populateJuzList();
    });

    function populateJuzList() {
        juzContainer.innerHTML = ''; // Clear existing content
        juzData.forEach(juz => {
            const juzHeader = document.createElement('div');
            juzHeader.className = 'juz-header';
            juzHeader.textContent = `Juz ${juz.juzNumber}`;
            const juzContent = document.createElement('div');
            juzContent.className = 'juz-content';

            juz.surahs.forEach(surahNumber => {
                const surah = surahList.find(s => s.number === surahNumber);
                if (surah) {
                    const li = createSurahListItem(surah);
                    juzContent.appendChild(li);
                }
            });

            juzHeader.addEventListener('click', () => {
                const allContents = document.querySelectorAll('.juz-content');
                allContents.forEach(content => {
                    if (content !== juzContent) {
                        content.style.display = 'none';
                    }
                });
                juzContent.style.display = juzContent.style.display === 'block' ? 'none' : 'block';
            });

            juzContainer.appendChild(juzHeader);
            juzContainer.appendChild(juzContent);
        });
    }

    // Playlist Feature
    document.getElementById('createPlaylistButton').addEventListener('click', () => {
        openPlaylistModal();
    });

    function openPlaylistModal() {
        document.getElementById('playlistModal').style.display = 'block';
        const playlistSurahList = document.getElementById('playlistSurahList');
        playlistSurahList.innerHTML = '';

        surahList.forEach(surah => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${surah.number}. ${surah.name}</span>`;
            const input = document.createElement('input');
            input.type = 'number';
            input.min = '1';
            input.value = '1';
            input.style.width = '50px';
            input.style.marginRight = '10px';

            const addButton = document.createElement('button');
            addButton.textContent = 'Add';
            addButton.className = 'add-button';
            addButton.addEventListener('click', () => {
                let count = parseInt(input.value);
                if (!isNaN(count) && count > 0) {
                    for (let i = 0; i < count; i++) {
                        playlist.push(surah);
                    }
                    alert(`${surah.name} added ${count} times to the playlist.`);
                } else {
                    alert("Invalid number.");
                }
            });
            li.appendChild(input);
            li.appendChild(addButton);
            playlistSurahList.appendChild(li);
        });
    }

    document.getElementById('finishPlaylistButton').addEventListener('click', () => {
        document.getElementById('playlistModal').style.display = 'none';
        displayPlaylist();
    });

    function displayPlaylist() {
        const playlistDisplay = document.getElementById('playlistDisplay');
        const playlistItems = document.getElementById('playlistItems');
        playlistItems.innerHTML = '';
        if (playlist.length > 0) {
            playlistDisplay.style.display = 'block';
            playlist.forEach((surah, index) => {
                const div = document.createElement('div');
                div.className = 'playlist-item';
                div.textContent = `${index + 1}. ${surah.name}`;
                playlistItems.appendChild(div);
            });
        } else {
            playlistDisplay.style.display = 'none';
        }
    }

    document.getElementById('playPlaylistButton').addEventListener('click', () => {
        if (playlist.length > 0) {
            currentPlaylistIndex = 0;
            isPlaylistPlaying = true;
            playPlaylistSurah();
        }
    });

    function playPlaylistSurah() {
        if (currentPlaylistIndex < playlist.length) {
            const surah = playlist[currentPlaylistIndex];
            currentSurahIndex = surahList.findIndex(s => s.number === surah.number);
            audioPlayer.src = `assets/${String(surah.number).padStart(3, '0')}.mp3`;
            audioPlayer.play();
            document.getElementById('bottomTrackTitle').textContent = surah.name;
            document.getElementById('playPauseButton').innerHTML = '&#9208;'; // Pause icon
            updateProgressBar();
        } else {
            isPlaylistPlaying = false;
        }
    }

    document.getElementById('playPauseButton').addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    // Repeat Button Functionality
    document.getElementById('repeatButton').addEventListener('click', () => {
        const repeatMenu = document.getElementById('repeatMenu');
        if (repeatMenu.style.display === 'block') {
            repeatMenu.style.display = 'none';
        } else {
            const repeatButton = document.getElementById('repeatButton');
            const rect = repeatButton.getBoundingClientRect();
            repeatMenu.style.display = 'block';
            repeatMenu.style.top = `${rect.top + window.scrollY - repeatMenu.offsetHeight}px`;
            repeatMenu.style.left = `${rect.left + window.scrollX - repeatMenu.offsetWidth / 2 + repeatButton.offsetWidth / 2}px`;
        }
    });

    const repeatCountSlider = document.getElementById('repeatCountSlider');
    const repeatCountValue = document.getElementById('repeatCountValue');

    repeatCountSlider.addEventListener('input', function () {
        repeatCount = parseInt(this.value);
        if (repeatCount === 31) {
            repeatCountValue.textContent = 'infinite';
        } else {
            repeatCountValue.textContent = repeatCount;
        }
    });

    document.getElementById('closeRepeatMenuButton').addEventListener('click', () => {
        document.getElementById('repeatMenu').style.display = 'none';
    });

    audioPlayer.addEventListener('play', () => {
        document.getElementById('playPauseButton').innerHTML = '&#9208;'; // Pause icon
    });

    audioPlayer.addEventListener('pause', () => {
        document.getElementById('playPauseButton').innerHTML = '&#9654;'; // Play icon
    });

    audioPlayer.addEventListener('ended', () => {
        if (playCount === 31 || currentPlayCount < playCount) {
            currentPlayCount++;
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else if (repeatCount === 31 || currentRepeatCount < repeatCount) {
            currentRepeatCount++;
            currentPlayCount = 1;
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else if (isPlaylistPlaying) {
            currentPlaylistIndex++;
            currentPlayCount = 1;
            currentRepeatCount = 1;
            playPlaylistSurah();
        } else {
            document.getElementById('playPauseButton').innerHTML = '&#9654;'; // Play icon
        }
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
        document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
        updateProgressBar();
    });

    audioPlayer.addEventListener('timeupdate', () => {
        if (audioPlayer.duration) {
            document.getElementById('progressBar').value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
        }
    });

    function updateProgressBar() {
        if (audioPlayer.duration) {
            document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
        }
    }

    document.getElementById('progressBar').addEventListener('input', (e) => {
        if (audioPlayer.duration) {
            audioPlayer.currentTime = (e.target.value / 100) * audioPlayer.duration;
        }
    });

    // Search functionality
    document.getElementById('searchBar').addEventListener('input', function () {
        const query = this.value.toLowerCase();
        const filteredSurahs = surahList.filter(surah => surah.name.toLowerCase().includes(query));
        populateSurahList(filteredSurahs);
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        switch (event.code) {
            case 'Space':
                event.preventDefault();
                if (audioPlayer.paused) {
                    audioPlayer.play();
                } else {
                    audioPlayer.pause();
                }
                break;
            case 'ArrowLeft':
                audioPlayer.currentTime -= 10;
                break;
            case 'ArrowRight':
                audioPlayer.currentTime += 10;
                break;
        }
    });

    populateSurahList();
});
