import ListOfThings from "../components/ListOfThings"
import LoginForm from "../components/LoginForm"
import ReadMore from "../components/ReadMore"
import StepTracker from "../components/StepTracker"


const UseStateTutorial = () => {
  return(
    <div>
      <ReadMore
        text={`Focused, hard work is the real key
          to success. Keep your eyes on the goal, 
          and just keep taking the next step 
          towards completing it.`}
        maxLength={35}
      />

      <StepTracker />
      <ListOfThings />
      <LoginForm />
    </div>
  )
}

export default UseStateTutorial;