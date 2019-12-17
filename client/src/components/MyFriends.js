import React, { useState, useEffect, } from 'react'
import { Card, Image, Divider, } from 'semantic-ui-react'
import axios from 'axios'

const MyFriends = () => {
  const [ profiles, setProfiles ] = useState([])
  
  useEffect( () => {
    axios.get('/api/friends')
      .then( res => setProfiles(res.data))
  }, [])

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
        </Card>
      ))}
    </Card.Group>
  )
}

export default MyFriends