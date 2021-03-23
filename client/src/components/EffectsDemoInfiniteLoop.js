import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import Card from "./Card"

const EffectsDemoInfiniteLoop = () => {
  const [title, setTitle] = useState('Default Title')
  const titleRef = useRef() 

  useEffect(()=>{
    console.log("useEffect")
    document.title = title
  })

  useEffect(()=>{
    console.log('useEffect local storage')
    const persistedTitle = localStorage.getItem("title")
    setTitle(persistedTitle || [])
  },[])
  
  console.log('render')
  const handleClick = () => setTitle(titleRef.current.value)
  return(
    <Card header='EffectsDemoNoDependency Component'>
      <div>
        <h1>{title}</h1>
        <br />
        <input ref={titleRef} />
        <Button onClick={handleClick}>Change Title</Button>
      </div>
    </Card>
  )
}



export default EffectsDemoInfiniteLoop;