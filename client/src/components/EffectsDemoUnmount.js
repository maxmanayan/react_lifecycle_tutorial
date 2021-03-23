import { useEffect, useState } from "react";
import Button from "./Button";
import Card from "./Card";

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const interval = setInterval(function () {
      setCount((prev) => prev + 1)
    }, 1000)
  }, [])
  return <p>and the counter counts {count}</p>
}

const EffectsDemoUnmount = () =>{
  const [unmount, setUnmount] = useState(false)
  const renderDemo = () => !unmount && <Counter />
  return(
    <Card header='Counter Component'>
      <Button onClick={()=>setUnmount(true)}>Unmount child component</Button>
      {renderDemo()}
    </Card>
  )
}


export default EffectsDemoUnmount;