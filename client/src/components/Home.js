import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Link, } from 'react-router-dom'
import { Header, Card, Image, Icon, Button, } from 'semantic-ui-react'

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
        <br />
        <Header as='h1' textAlign='center'>MySpace</Header>
        <br />
        <Card>
          <Image src={friend.avatar} />
          <Card.Content>
            <Card.Header>
              { friend.name }
            </Card.Header>
            <Card.Description>
              { friend.favorite_color }
            </Card.Description>
            <Card.Meta>
              { friend.relationship_status }
            </Card.Meta>
            <Card.Meta>
              { friend.birthdate }
            </Card.Meta>
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
    return <Header as='h2' textAlign='center'>You Have No Friends</Header>
  }
}

export default Home