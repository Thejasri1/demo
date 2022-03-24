import React from 'react'

const DemoComponent = ({name,age,img}) => {
  return (
    <div>
      <p>my name is {name} my age {age}</p>
      <img src={img} style={{height:"80px",width:"80px"}}/>
    </div>
  )
}

export default DemoComponent
