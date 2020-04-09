import React from 'react'
import NavigationBar from '../containers/navbar'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button, Alert } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'


export default props => {

    console.log("check me", props)
    return (
        <div>
            {props.authenticated && <Redirect to="/" />}
            <NavigationBar  />
            <div className="container" style={{marginTop: '3rem'}}>
            <Form onSubmit={async e => { e.preventDefault();  await props.createUser(); }}>
                <FormGroup onBlur={ e => props.usernameBlur(e.target.value.trim()) }>
                    <Label for="exampleEmail">Username</Label>
                    <Input 
                        id="username-input" 
                        invalid = {props.validUsername === false && document.getElementById("username-input").value.trim() !== ""} 
                        valid = {props.validUsername === true} />
                    {props.validUsername && <FormFeedback valid>Sweet! That username is available.</FormFeedback>}
                    {props.validUsername === false && <FormFeedback invalid>That username is invalid or already taken.</FormFeedback>}
                    <FormText>Usernames can contain lowercase and uppercase letters and numbers.</FormText>
                </FormGroup>
                <FormGroup onBlur={ e => props.passwordBlur(e.target.value.trim()) } >
                    <Label for="examplePassword">Password</Label>
                    <Input 
                        id="password-input" 
                        invalid = {props.validPassword === false && document.getElementById("password-input").value.trim() !== ""} 
                        valid = {props.validPassword === true} />
                    {props.validPassword && <FormFeedback valid>Great! This is a valid password.</FormFeedback>}
                    {props.validPassword === false && <FormFeedback invalid>Oh no! That password is invalid. Please try again. </FormFeedback>}
                    <FormText>Passwords must contain at least one numeric character and 1 capital letter.</FormText>
                </FormGroup>
                {props.toggleUserAlert && <Alert>Please input a username and password to sign in.</Alert>}
                <Button 
                    id='login-text-button'
                    secondary>
                        <Link 
                        to={props.toggleUserAlert ? "/createUser"  : "/"} 
                        style={{ color: 'white' }} 
                        onClick={() => props.createUserAlert()}>
                            SIGN UP</Link>
                </Button>
            </Form>
            </div>
        </div>
    )
}