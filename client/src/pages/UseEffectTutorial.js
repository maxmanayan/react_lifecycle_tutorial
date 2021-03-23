import EffectsDemoUnmount from "../components/EffectsDemoUnmount"
import EffectsDemoInfiniteLoop from "../components/EffectsDemoInfiniteLoop"
import EffectsDemoNoDependency from "../components/EffectsDemoNoDependency"
import EffectsDemoTwoStates from "../components/EffectsDemoTwoStates"
import EffectsDemoProps from "../components/EffectsDemoProps"
import EffectsDemoContext from "../components/EffectsDemoContext"

const UseEffectTutorial = () => {
  return(
    <div>
      <EffectsDemoNoDependency />
      <EffectsDemoTwoStates />
      <EffectsDemoInfiniteLoop />
      <EffectsDemoUnmount />
      <EffectsDemoProps />
      <EffectsDemoContext />
    </div>
  )
}



export default UseEffectTutorial;