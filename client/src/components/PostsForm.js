import React, { useState, useEffect} from 'react'
import { Form, } from 'semantic-ui-react'
import axios from 'axios'

const PostsForm = (props) => {
  const [body, setBody] = useState("")

  const handleBodyChange = (e) => {
    setBody(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/posts', {body})
      .then( res => {
        props.add(res.data)
        props.toggleForm(false)
      })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input 
            name='body'
            value={body}
            label='Body'
            placeholder='Body'
            required
            onChange={handleBodyChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
        <br />
      </Form>
    </>
  )
}

export default PostsForm