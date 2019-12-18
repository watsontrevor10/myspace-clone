import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import Posts from '../components/Posts'
import { Header, Card, Image, Icon, Button, Segment, Grid, Divider, } from 'semantic-ui-react'

const Home = () => {
  const [ profiles, setProfiles ] = useState([])
  
  useEffect( () => {
    axios.get('/api/profiles')
      .then( res => setProfiles(res.data))
  }, [])

  const sample = () => {
    if (profiles.length) {
      const index = Math.floor(Math.random() * profiles.length)
      return profiles[index]
    } else {
      return null 
    }
  }

  const downVote = (id) => {
    const newFriends = profiles.filter( friend => friend.id !== id)
    setProfiles(newFriends)
  }

  const upVote = (id) => {
    axios.put(`/api/profiles/${id}`)
      .then( res => setProfiles(profiles.filter( friend => friend.id !== id )) )
  }

  const friend = sample()
  if (friend) {
    return (
      <div>
        <Card centered>
          <Image src={friend.avatar} />
          <Card.Content>
            <Card.Header>
              { friend.name }
            </Card.Header>
            <Card.Description>
              Fave Color: { friend.favorite_color }
            </Card.Description>
            <Card.Description>
              Relationship Status: { friend.relationship_status }
            </Card.Description>
            <Card.Description>
              Birthday: { friend.birthday }
            </Card.Description>
            <Divider />
            <Card.Content extra>
              <Button color="green" icon basic onClick={ () => upVote(friend.id)}>
                <Icon name="add circle" />
              </Button>
              <Button color="red" icon basic onClick={ () => downVote(friend.id)}>
                <Icon name="minus circle" />
              </Button>
            </Card.Content>
          </Card.Content>
        </Card>
        {/* <Button as={Link} to='/my_friends' color="blue">
          My Friends
        </Button> */}
      </div>
    )
  } else {
    return <Header as='h2' textAlign='center'>No Friend Recommendations</Header>
  }
}

const HomePage = () => (
  <div>
    <br />
    <Header as='h1' textAlign='center'>MySpace</Header>
    <br />
    <Segment placeholder>
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical />
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Posts />
          </Grid.Column>
          <Grid.Column>
            <Home />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
)

export default HomePage