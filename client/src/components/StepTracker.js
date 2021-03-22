import { useState } from "react";
import Button from "./Button";
import Card from "./Card"


const StepTracker = () => {
  const [steps, setSteps] = useState(0)

  const increment = () => {
    setSteps(prevState => prevState + 1)
  }

  const reset = () => {
    setSteps(0)
  }

  return(
    <Card header='StepTracker Component'>
      <h1>Today you've taken {steps} steps!</h1>
      <br/>
      <Button onClick={increment}>I took another step! 👣</Button>
      <Button onClick={reset}>Reset</Button>
    </Card>
  )
}

export default StepTracker;