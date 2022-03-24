import React,{useContext,useState} from 'react'
import {store} from './App'

const ComponentB = () => {
    const [data,setData]= useContext(store);
  return (
    <div>
      <h1>ComponentB : {data}</h1>
    </div>
  )
}

export default ComponentB
