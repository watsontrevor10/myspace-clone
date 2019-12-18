import React, { useState, useEffect, } from 'react'
import PostsForm from '../components/PostsForm'
import { Segment, List, Header, Button, } from 'semantic-ui-react'
import axios from 'axios'

const Posts = (props) => {
  const [posts, setPosts] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect( () => {
   axios.get('/api/posts')
    .then( res => {
      setPosts(res.data)
    })
  }, [])

  const renderPosts = () => {
    return posts.map( post => (
      <Segment key={post.id}>
        <List.Description>
          { post.body }
        </List.Description>
      </Segment>
    ))
  }

  const addPost = (post) => {setPosts([...posts, post])}

  return (
    <>
      <Header centered>Posts</Header>
      <br />
      { showForm ? <PostsForm add={addPost} toggleForm={setShowForm}/> : null }
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Show Form'}
      </Button>
      <List>
        { renderPosts() }
      </List>
    </>
  )

}

export default Posts