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

// setting state as an object

// const LoginForm = () => {
//   const [form, setState] = useState({
//     username: '',
//     password: ''
//   })

//   const printValues = (e) => {
//     e.preventDefault()
//     console.log(`username: ${form.username}, password: ${form.password}`)
//   }

//   const updateField = (e) => {
//     setState({
//       ...form,
//       [e.target.name]: e.target.value
//     })
//   }

//   return(
//     <Card header='LoginForm Component'>
//       <Form onSubmit={printValues}>
//         <Form.Field>
//           <label>Username</label>
//           <input name='username' placeholder='Username' value={form.username} onChange={(updateField)}/>
//         </Form.Field>
//         <Form.Field>
//           <label>Password</label>
//           <input name='password' placeholder='Password' value={form.password} onChange={(updateField)} />
//         </Form.Field>
//         <br />
//         <Button type='submit'>Submit</Button>
//       </Form>
//     </Card>
//   )
// }

export default LoginForm;