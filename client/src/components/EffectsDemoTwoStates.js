import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Card from "./Card";

const EffectsDemoTwoStates = () => {
  const [title, setTitle] = useState('Default Title')
  const titleRef = useRef()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(()=>{
    console.log("useEffect")
    document.title = title
  },[title])
  
  console.log('render')
  const handleClick = () => setTitle(titleRef.current.value)
  const handleCheckboxChange = () => setDarkMode((prev) => !prev)
  return(
    <Card header='EffectsDemoNoDependency Component'>
      <div className={darkMode ? 'dark-mode' : ''}>
        <label htmlFor='darkMode'>Dark Mode</label>
        <input 
        name='darkMode'
        type='checkbox'
        checked={darkMode}
        onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <h1>{title}</h1>
        <br />
        <input ref={titleRef} />
        <Button onClick={handleClick}>Change Title</Button>
      </div>
    </Card>
  )
}


export default EffectsDemoTwoStates;