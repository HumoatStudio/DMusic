const tracks = [
    {
        title: "Бадабум",
        artist: "1MiyaGi ft. Эндшпиль",
        src: "songs/MiyaGi ft. Эндшпиль - Бадабум.mp3",
        cover: "covers/cover1.jpg"
    },
    {
        title: "По Кайфу",
        artist: "Олег Кензов",
        src: "songs/Олег Кензов - По Кайфу.mp3",
        cover: "covers/cover2.jpg"
    },
    {
        title: "Пыяла",
        artist: "Aigel",
        src: "songs/aigel-pyyala.mp3",
        cover: "covers/cover3.jpg"
    },
    {
        title: "Дави На Газ",
        artist: "Ryze",
        src: "songs/ryzedavinagaz.mp3",
        cover: "covers/cover4.jpg"
    },
    {
        title: "Say My Name",
        artist: "David Guetta, Bebe Rexha J Balvin",
        src: "songs/David Guetta, Bebe Rexha J Balvin Say My Name.mp3",
        cover: "covers/cover5.jpg"
    }
];

let currentTrack = 0;

const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.getElementById('track-title');
const artistName = document.getElementById('artist-name');
const trackSource = document.getElementById('track-source');
const albumCover = document.getElementById('album-cover');

const playButton = document.querySelector('.play');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const trackList = document.getElementById('track-list');

function loadTrack(index) {
    const track = tracks[index];
    trackTitle.textContent = track.title;
    artistName.textContent = track.artist;
    trackSource.src = track.src;
    albumCover.src = track.cover;
    audioPlayer.load();
}

function populateTrackList() {
    tracks.forEach((track, index) => {
        const trackItem = document.createElement('li');
        trackItem.textContent = `${track.title} - ${track.artist}`;
        trackItem.addEventListener('click', () => {
            currentTrack = index;
            loadTrack(currentTrack);
            audioPlayer.play();
            playButton.textContent = 'Pause';
        });
        trackList.appendChild(trackItem);
    });
}

playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    }
});

prevButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audioPlayer.play();
    playButton.textContent = 'Pause';
});

nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audioPlayer.play();
    playButton.textContent = 'Pause';
});

populateTrackList();
loadTrack(currentTrack);