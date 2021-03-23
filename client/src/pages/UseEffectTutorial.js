import EffectsDemoUnmount from "../components/EffectsDemoUnmount"
import EffectsDemoInfiniteLoop from "../components/EffectsDemoInfiniteLoop"
import EffectsDemoNoDependency from "../components/EffectsDemoNoDependency"
import EffectsDemoTwoStates from "../components/EffectsDemoTwoStates"

const UseEffectTutorial = () => {
  return(
    <div>
      <EffectsDemoNoDependency />
      <EffectsDemoTwoStates />
      <EffectsDemoInfiniteLoop />
      <EffectsDemoUnmount />
    </div>
  )
}



export default UseEffectTutorial;