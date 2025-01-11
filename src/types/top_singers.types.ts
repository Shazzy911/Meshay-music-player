export type SongDataType = {
  id: number;
  title: string;
  featuring: string;
  image: string;
  album: string;
  time: string;
  file: string;
};

export type TopSingersType = {
  id: number;
  newImage: string; // Add your image URL
  mainTitle: string;
  subTitle: string;

  songs: SongDataType[];
};
