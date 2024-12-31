import song1 from "@/assets/audio/Fishtail.mp3"; // Adjust the path as needed
// D:\Website Data of 2024\University Project 4th Semsester\Music Application\client\music-player\src

type SongDataType = {
  id: number;
  title: string;
  featuring: string;
  image: string;
  file: string; // URL or path to the audio file
  time: string;
  album: string;
};

export const songs: SongDataType[] = [
  {
    id: 1,
    title: "Shape of You",
    featuring: "Ed Sheeran",
    image: "https://example.com/images/shape-of-you.jpg",
    file: song1,
    time: "3:45",
    album: "Divide",
  },
  {
    id: 2,
    title: "Blinding Lights",
    featuring: "The Weeknd",
    image: "https://example.com/images/blinding-lights.jpg",
    file: "https://example.com/audio/blinding-lights.mp3",
    time: "3:20",
    album: "After Hours",
  },
  {
    id: 3,
    title: "Someone Like You",
    featuring: "Adele",
    image: "https://example.com/images/someone-like-you.jpg",
    file: "https://example.com/audio/someone-like-you.mp3",
    time: "4:45",
    album: "21",
  },
  {
    id: 4,
    title: "Uptown Funk",
    featuring: "Mark Ronson ft. Bruno Mars",
    image: "https://example.com/images/uptown-funk.jpg",
    file: "https://example.com/audio/uptown-funk.mp3",
    time: "4:30",
    album: "Uptown Special",
  },
  {
    id: 5,
    title: "Stay",
    featuring: "Justin Bieber & The Kid LAROI",
    image: "https://example.com/images/stay.jpg",
    file: "https://example.com/audio/stay.mp3",
    time: "2:50",
    album: "Stay (Single)",
  },
  {
    id: 6,
    title: "Bad Guy",
    featuring: "Billie Eilish",
    image: "https://example.com/images/bad-guy.jpg",
    file: "https://example.com/audio/bad-guy.mp3",
    time: "3:14",
    album: "When We All Fall Asleep, Where Do We Go?",
  },
  {
    id: 7,
    title: "Rolling in the Deep",
    featuring: "Adele",
    image: "https://example.com/images/rolling-in-the-deep.jpg",
    file: "https://example.com/audio/rolling-in-the-deep.mp3",
    time: "3:48",
    album: "21",
  },
  {
    id: 8,
    title: "Perfect",
    featuring: "Ed Sheeran",
    image: "https://example.com/images/perfect.jpg",
    file: "https://example.com/audio/perfect.mp3",
    time: "4:23",
    album: "Divide",
  },
  {
    id: 9,
    title: "Levitating",
    featuring: "Dua Lipa ft. DaBaby",
    image: "https://example.com/images/levitating.jpg",
    file: "https://example.com/audio/levitating.mp3",
    time: "3:40",
    album: "Future Nostalgia",
  },
  {
    id: 10,
    title: "Roar",
    featuring: "Katy Perry",
    image: "https://example.com/images/roar.jpg",
    file: "https://example.com/audio/roar.mp3",
    time: "3:42",
    album: "Prism",
  },
  {
    id: 11,
    title: "Sunflower",
    featuring: "Post Malone & Swae Lee",
    image: "https://example.com/images/sunflower.jpg",
    file: "https://example.com/audio/sunflower.mp3",
    time: "2:41",
    album: "Spider-Man: Into the Spider-Verse",
  },
  {
    id: 12,
    title: "Senorita",
    featuring: "Shawn Mendes & Camila Cabello",
    image: "https://example.com/images/senorita.jpg",
    file: "https://example.com/audio/senorita.mp3",
    time: "3:10",
    album: "Senorita (Single)",
  },
];
