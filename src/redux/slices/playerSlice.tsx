import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SongDataType {
  id: string;
  title: string;
  img: string;
  songUrl: string;
  duration: number;

  album?: {
    id: string;
    title: string;
  };

  artistName?: string;
}

type RepeatMode = "off" | "all" | "one";

interface PlayerState {
  currentSongIndex: number;
  isPlaying: boolean;
  songList: SongDataType[];

  shuffle: boolean;
  repeat: RepeatMode;

  recentlyPlayed: SongDataType[];
}

const initialState: PlayerState = {
  currentSongIndex: 0,
  isPlaying: false,
  songList: [],

  shuffle: false,
  repeat: "off",

  recentlyPlayed: [],
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    // 🎵 SET QUEUE
    setQueue: (state, action: PayloadAction<SongDataType[]>) => {
      state.songList = action.payload;
    },

    // ▶️ PLAY BY INDEX
    playSong: (state, action: PayloadAction<number>) => {
      state.currentSongIndex = action.payload;
      state.isPlaying = true;
    },

    pauseSong: (state) => {
      state.isPlaying = false;
    },

    resumeSong: (state) => {
      state.isPlaying = true;
    },

    // ⏭ NEXT SONG (shuffle aware)
    nextSong: (state) => {
      if (state.songList.length === 0) return;

      if (state.shuffle) {
        state.currentSongIndex = Math.floor(
          Math.random() * state.songList.length,
        );
      } else {
        state.currentSongIndex =
          (state.currentSongIndex + 1) % state.songList.length;
      }
    },

    // ⏮ PREVIOUS SONG
    previousSong: (state) => {
      if (state.songList.length === 0) return;

      state.currentSongIndex =
        (state.currentSongIndex - 1 + state.songList.length) %
        state.songList.length;
    },

    // 🔀 SHUFFLE TOGGLE
    toggleShuffle: (state) => {
      state.shuffle = !state.shuffle;
    },

    // 🔁 REPEAT MODE
    setRepeat: (state, action: PayloadAction<RepeatMode>) => {
      state.repeat = action.payload;
    },

    // 💾 RECENTLY PLAYED
    addRecentlyPlayed: (state, action: PayloadAction<SongDataType>) => {
      const song = action.payload;

      state.recentlyPlayed = [
        song,
        ...state.recentlyPlayed.filter((s) => s.id !== song.id),
      ].slice(0, 20);
    },
  },
});

export const {
  setQueue,
  playSong,
  pauseSong,
  resumeSong,
  nextSong,
  previousSong,
  toggleShuffle,
  setRepeat,
  addRecentlyPlayed,
} = playerSlice.actions;

export default playerSlice.reducer;
