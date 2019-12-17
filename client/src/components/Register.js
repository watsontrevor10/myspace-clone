import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', }

  handleChange = (e) => {
    const { name, value, } = e.target
    this.setState({ [name]: value, })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, passwordConfirmation, } = this.state
    const { auth: { handleRegister, }, history, } = this.props

    if (password === passwordConfirmation) {
      handleRegister({ email, passwordConfirmation, password, }, history)
    } else {
      alert('Passwords Do No Match')
    }
  }

  render() {
    const { email, password, passwordConfirmation, } = this.state

    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input 
            label='Email'
            autoFocus
            required
            name='email'
            value={email}
            placeholder='Email'
            type="email"
            onChange={this.handleChange}
          />
          <Form.Input 
            label='Password'
            required
            name='password'
            value={password}
            placeholder='password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input 
            label='Password Confirmation'
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <Segment basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
} 