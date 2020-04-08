import React from 'react'
import NavigationBar from '../containers/navbar'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';


export default props => {
    console.log(props)
    return (
        <div>
            <NavigationBar  />
            <div className="container" style={{marginTop: '3rem'}}>
            <Form onSubmit={e => { e.preventDefault(); props.createUser()}}>
                <FormGroup onBlur={ e => props.emailBlur(e.target.value.trim()) }>
                    <Label for="exampleEmail">Username</Label>
                    <Input 
                        id="username-input" 
                        invalid = {props.validUsername === false && document.getElementById("username-input").value.trim() != ""} 
                        valid = {props.validUsername === true} />
                    <FormFeedback valid>Sweet! That username is available.</FormFeedback>
                    <FormText>Usernames can contain lowercase and uppercase letters and numbers.</FormText>
                </FormGroup>
                <FormGroup onBlur={ e => props.passwordBlur(e.target.value.trim()) } >
                    <Label for="examplePassword">Password</Label>
                    <Input 
                        id="password-input" 
                        invalid = {props.validPassword === false && document.getElementById("password-input").value.trim() != ""} 
                        valid = {props.validPassword === true} />
                    <FormFeedback invalid>Oh no! That password is invalid. Please try again. </FormFeedback>
                    <FormFeedback valid>Great! This is a valid password.</FormFeedback>
                    <FormText>Passwords must contain at least one numeric character and 1 capital letter.</FormText>
                </FormGroup>
                <Button 
                    id='login-text-button'
                    secondary>
                        SIGN UP
                </Button>
            </Form>
            </div>
        </div>
    )
}