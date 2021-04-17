/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react'

import './Button.css'

const Button = () => {
  const cursorRef = useRef(null)
  const [botonPos, setBotonPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      setBotonPos({ x: mouseX, y: mouseY })
    })
  }, [])
  return (
    <div className="circle" style={{ top: botonPos.y, left: botonPos.x }} ref={cursorRef}>
      <div className="circleInside" style={{ top: botonPos.y + 37, left: botonPos.x + 35 }} ref={cursorRef} />
    </div>
  )
}
export default Button
