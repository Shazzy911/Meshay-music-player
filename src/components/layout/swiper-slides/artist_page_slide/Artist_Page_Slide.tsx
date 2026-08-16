import style from "./Artist_Page_Slide.module.scss";

type ArtistImage = {
  id: string;
  url: string;
  order: number;
};

type Props = {
  images: ArtistImage[];
};

const Artist_Page_Slide = ({ images }: Props) => {
  return (
    <>
      {images.map((item) => (
        <div
          key={item.id}
          className={style.container}
          style={{
            backgroundImage: `url(${item.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        />
      ))}
    </>
  );
};

export default Artist_Page_Slide;
