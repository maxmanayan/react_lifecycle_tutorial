import { useState } from "react"
import { Form } from "semantic-ui-react"
import Button from "./Button"
import Card from "./Card"

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const printValues = (e) => {
    e.preventDefault()
    console.log(`username: ${username}, password: ${password}`)
    setUsername('')
    setPassword('')
  }

  return(
    <Card header='LoginForm Component'>
      <Form onSubmit={printValues}>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Field>
        <br />
        <Button type='submit'>Submit</Button>
      </Form>
    </Card>
  )
}



export default LoginForm;