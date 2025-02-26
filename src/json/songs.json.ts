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
    title: "Fingertips",
    featuring: "Lana Del Rey",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2025-01-02T12%3A00%3A54.249Z",
    time: "3:45",
    album: "Divide",
  },
  {
    id: 2,
    title: "Paris Texas",
    featuring: "Lana del rey feat (SYML)",
    image:
      "https://i.pinimg.com/236x/f8/b9/14/f8b914d17ec1154b51458ef6c0cd9822.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Paris,%20Texas%20(feat.%20SYML).mp3?t=2025-01-02T12%3A01%3A39.900Z",
    time: "3:20",
    album: "After Hours",
  },
  {
    id: 3,
    title: "295",
    featuring: "Sidhu Moose Wala",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/295-Sidhu-Moose-Wala.mp3",
    time: "4:45",
    album: "21",
  },
  {
    id: 4,
    title: "Uptown Funk",
    featuring: "Mark Ronson ft. Bruno Mars",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2024-12-31T18%3A09%3A27.033Z",
    time: "4:30",
    album: "Uptown Special",
  },
  {
    id: 5,
    title: "Stay",
    featuring: "Justin Bieber & The Kid LAROI",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2024-12-31T18%3A09%3A27.033Z",
    time: "2:50",
    album: "Stay (Single)",
  },
  {
    id: 6,
    title: "Bad Guy",
    featuring: "Billie Eilish",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2024-12-31T18%3A09%3A27.033Z",
    time: "3:14",
    album: "When We All Fall Asleep, Where Do We Go?",
  },
  {
    id: 7,
    title: "Rolling in the Deep",
    featuring: "Adele",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2024-12-31T18%3A09%3A27.033Z",
    time: "3:48",
    album: "21",
  },
  {
    id: 8,
    title: "Perfect",
    featuring: "Ed Sheeran",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2024-12-31T18%3A09%3A27.033Z",
    time: "4:23",
    album: "Divide",
  },
  {
    id: 9,
    title: "Levitating",
    featuring: "Dua Lipa ft. DaBaby",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2024-12-31T18%3A09%3A27.033Z",
    time: "3:40",
    album: "Future Nostalgia",
  },
  {
    id: 10,
    title: "Roar",
    featuring: "Katy Perry",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2024-12-31T18%3A09%3A27.033Z",
    time: "3:42",
    album: "Prism",
  },
  {
    id: 11,
    title: "Sunflower",
    featuring: "Post Malone & Swae Lee",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2024-12-31T18%3A09%3A27.033Z",
    time: "2:41",
    album: "Spider-Man: Into the Spider-Verse",
  },
  {
    id: 12,
    title: "Senorita",
    featuring: "Shawn Mendes & Camila Cabello",
    image:
      "https://i.pinimg.com/236x/f9/d0/70/f9d070ab175d5817deed4f688e1e868f.jpg",
    file: "https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/audio/Fingertips.mp3?t=2024-12-31T18%3A09%3A27.033Z",
    time: "3:10",
    album: "Senorita (Single)",
  },
];
