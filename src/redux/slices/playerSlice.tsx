import { createSlice } from "@reduxjs/toolkit";

interface SongDataType {
  id: number;
  title: string;
  featuring: string;
  image: string;
  file: string;
  time?: string;
  album?: string;
}

const initialState = {
  currentSongIndex: 0,
  isPlaying: false,
  songList: [] as SongDataType[], // Use the SongDataType
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setSongList: (state, action) => {
      state.songList = action.payload;
    },
    playSong: (state, action) => {
      state.currentSongIndex = action.payload;
      state.isPlaying = true;
    },

    pauseSong: (state) => {
      state.isPlaying = false;
    },
    resumeSong: (state) => {
      state.isPlaying = true;
    },
    nextSong: (state) => {
      state.currentSongIndex =
        (state.currentSongIndex + 1) % state.songList.length;
    },
    previousSong: (state) => {
      state.currentSongIndex =
        (state.currentSongIndex - 1 + state.songList.length) %
        state.songList.length;
    },
  },
});

export const {
  setSongList,
  playSong,
  pauseSong,
  resumeSong,
  nextSong,
  previousSong,
} = playerSlice.actions;

export default playerSlice.reducer;
