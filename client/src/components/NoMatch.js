import React from 'react'
import { Header,} from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const NoMatch = () => (
  <>
    <Header as="h1" textAlign='center'>Page Not Found</Header>
    <Header as="h2" textAlign='center'>Return to <Link to='/'>Home</Link></Header>
  </>
)

export default NoMatch