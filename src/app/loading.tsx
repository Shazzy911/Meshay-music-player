import style from "@/app/styles/loading.module.scss";

const Loading = () => {
  return (
    <div className={style.wrapper}>
      <span className={style.loader}></span>
    </div>
  );
};

export default Loading;
