import React from "react"
import "../styles/secondCard.css"

export default function SecondCard() {
  return (
      <div className="col">
    <div className="examcard flex-col-hstart-vstart clip-contents">
      <div className="frame-22222 flex-row-vcenter-hstart">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vqg04w5fh47-659%3A41385?alt=media&token=0a6d4413-067e-453f-86e3-c5e3d9d534c5"
          alt="Not Found"
          className="cover"
        />
        <p className="txt-896">Errores</p>
      </div>
      <div className="frame-2226 flex-col-hstart-vstart">
        <div className="carddetailitem flex-row-vcenter-hstart">
          <p className="txt-628">432 preguntas</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/vqg04w5fh47-I659%3A41391%3B301%3A42904?alt=media&token=8ec0b900-a0ef-4091-b560-ed25e691be6c"
            alt="Not Found"
            className="icon"
          />
        </div>
        <div className="textcourse flex-col-hcenter-vend">
          <p className="txt-713">Errores</p>
        </div>
      </div>
    </div>
      </div>
  )
}