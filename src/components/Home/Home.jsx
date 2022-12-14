import React from 'react'
import img1 from "../../asset/r1.png"
import Card from './Card'
import img2 from "../../asset/r2.png"
import img3 from "../../asset/r3.png"

function Home() {
  return (
    <div className='home'>
        <div className="upper_row">

          <Card title={"Card Title"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corporis."} image={img1} />
          <Card title={"Card Title"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corporis."} image={img2} />
          <Card title={"Card Title"} desc={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, corporis."} image={img3} />



        </div>
    </div>
  )
}

export default Home