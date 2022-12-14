import React from 'react'

import {BsHeartFill} from "react-icons/bs"
import {AiFillClockCircle} from "react-icons/ai"

function Card({image, title, desc }) {
  return (
    <div className="card_item">
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>{desc}</p>
              <hr />
              <div className="card_bottom">
                <div>
                <AiFillClockCircle/> 6 hours ago
                </div>
                <div>
                  <BsHeartFill style={{color: 'rgb(222, 27, 102)'}} /> 564
                </div>
              </div>
    </div>
  )
}

export default Card