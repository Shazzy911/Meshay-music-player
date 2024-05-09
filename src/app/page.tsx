import MainSlider from "./UI/mainslider/MainSlider";
import Slide from "./UI/slide/Slide";
import style from "./page.module.scss";



const page = () => {
  return (
    <div className={style.container}>
      <MainSlider>
        <Slide/>
      </MainSlider>
      
      
    </div>
  )
}

export default page