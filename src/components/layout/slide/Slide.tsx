import { slide_dummy } from '@/json/slide_dummy'
import style from "./Slide.module.scss";
import Button from '@/components/ui/button/Button';



const Slide = () => {

  return (
    <>
      {
        slide_dummy.map((item) => (

          <div className={style.container} key={item.id} style={{
            background: `url(${item.image}) center center / cover no-repeat`,
            width: '1000px',
            height: '490px',

          }}>
            <h1>{item.heading}</h1>
            <p>{item.description}</p>
            <div className={style.button_box}>
              <Button text={item.btn1} />
              {
                item.btn2 ? <Button text={item.btn2} /> : null
              }

            </div>

          </div>


        ))
      }




    </>
  )
}

export default Slide;





// background: url(&quot;img/home/slide1.jpg&quot;) center center / cover no-repeat;