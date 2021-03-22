import { useState } from "react";
import { Form } from "semantic-ui-react";
import Button from "./Button";
import Card from "./Card"

const ListOfThings = () => {
  const [items, setItems] = useState([])
  const [itemName, setItemName] = useState('')

  const addItem = (e) => {
    e.preventDefault()
    setItems([...items, {id: items.length, name: itemName}])
    setItemName('')
  }

  return(
    <Card header='ListOfThings Component'>
      <Form onSubmit={addItem}>
        <h1>Create New Item</h1>
        <Form.Field>
          <label>Name</label>
          <input placeholder='Name' value={itemName} onChange={(e)=> setItemName(e.target.value)}/>
        </Form.Field>
      </Form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Button onClick={()=>setItems([])}>Clear List</Button>
    </Card>
  )
}



export default ListOfThings;