import React from "react"
import { useNavigate } from "react-router-dom";
import "../styles/maincard1.css"

export default function MainCard1() {

    let navigate = useNavigate();
    const handleCard = () => {
      navigate('/discusiones');
    }

  return (
      <div className="col " id="hoverCard" onClick={handleCard}>

        <div className="examcard flex-col-hstart-vstart clip-contents">
            <div className="frame-2227 flex-row-vcenter-hstart">
                <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bywoy8i5x8-659%3A41375?alt=media&token=ecfda979-d8a5-4089-8640-adbe04edd1e2"
                alt="Not Found"
                className="cover"
                />
                <p className="txt-874">General</p>
            </div>
            <div className="frame-2226 flex-col-hstart-vstart">
                <div className="carddetailitem flex-row-vcenter-hstart">
                <p className="txt-901">12k preguntas</p>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/bywoy8i5x8-I659%3A41381%3B301%3A42904?alt=media&token=d1d3a23e-8439-4d66-bba9-1cbd8f461d27"
                    alt="Not Found"
                    className="icon"
                />
                </div>
                <div className="textcourse flex-col-hcenter-vend">
                <p className="txt-8741">Dudas general</p>
                </div>
            </div>
            </div>

      </div>
   
  )
}