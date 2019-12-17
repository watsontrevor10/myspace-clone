import React, { useState, useEffect, } from 'react'
import { Card, Image, Divider, Icon, Button, } from 'semantic-ui-react'
import axios from 'axios'

const MyFriends = () => {
  const [ profiles, setProfiles ] = useState([])
  
  useEffect( () => {
    axios.get('/api/friends')
      .then( res => setProfiles(res.data))
  }, [])

  const unfriend = (id) => {
    setProfiles(profiles.filter( profile => profile.id !== id ))
  }

  return (
    <Card.Group itemsPerRow={4}>
      { profiles.map( friend => (
        <Card key={friend.id}> 
          <Image src={friend.avatar} />
          <Card.Content>
            <Divider />
            <Card.Header>
              { friend.name }
            </Card.Header>
          </Card.Content>
          <Button color='red' icon basic onClick={ () => unfriend(friend.id)}>
            <Icon name='minus circle' />
          </Button>
        </Card>
      ))}
    </Card.Group>
  )
}

export default MyFriends