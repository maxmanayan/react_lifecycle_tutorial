import React,{ useCallback, useContext, useEffect, useState } from "react"
import Card from "./Card"

const EffectsContext = React.createContext(null);
const Counter = ({interval}) => {
  const [count, setCount] = useState(0)
  const { onDarkModeChange } = useContext(EffectsContext)

  useEffect(()=>{
    const counterInterval = setInterval(()=>{
      setCount((prev)=> prev + 1)
    }, interval)
    return () => clearInterval(counterInterval)
  },[interval, onDarkModeChange])
  return <p>and the counter counts {count}</p>
}

const IntervalConfig = ({onDarkModeChange}) => {
  const [interval, setInterval] = useState(1000)
  const onChange = (e) => setInterval(e.target.value)
  return (
    <div>
      <input type='text' value={interval} onChange={onChange} />
      <Counter interval={interval} />
    </div>
  )
}

const EffectsDemoContext = () => {
  const [numberClicks, setNumberClicks] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const onDarkModeChange = useCallback(() => {
    return darkMode ? '🌙' : '☀'
  }, [darkMode])
  
  return(
    <Card>
      <div
        style={
          darkMode
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        <label htmlFor="darkMode">dark mode</label>
        <input
          name="darkMode"
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode((prev) => !prev)}
        />
        <p>
          <button onClick={() => setNumberClicks((prev) => prev + 1)}>
            click
          </button>
          <span>&nbsp;Number clicks: {numberClicks}</span>
        </p>
        <EffectsContext.Provider value={{ onDarkModeChange }}>
          <IntervalConfig />
        </EffectsContext.Provider>
      </div>
    </Card>
  )
}

export default EffectsDemoContext;