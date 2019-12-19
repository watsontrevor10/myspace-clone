import React, { useState, useEffect, } from 'react'
import PostsForm from '../components/PostsForm'
import { Segment, List, Header, Button, Icon, Divider, Grid, } from 'semantic-ui-react'
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

  const deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
      .then( res => {
        setPosts(posts.filter( post => post.id !== id ))
      })
  }

  const renderPosts = () => {
    return posts.map( post => (
      <>
        <Segment key={post.id}>
          <Grid columns={2} >
            <Grid.Column>
              <List.Description>
                { post.body }
              </List.Description>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={() => deletePost(post.id)} basic icon negative >
                <Icon color='red' name='trash' />
              </Button>
            </Grid.Column>
          </Grid>
          <Divider vertical />
        </Segment>
      </>
    ))
  }

  const addPost = (post) => {setPosts([...posts, post])}

  return (
    <>
      <Header centered>Posts</Header>
      <br />
      { showForm ? <PostsForm add={addPost} toggleForm={setShowForm}/> : null }
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add Post'}
      </Button>
      <List>
        { renderPosts() }
      </List>
    </>
  )

}

export default Posts