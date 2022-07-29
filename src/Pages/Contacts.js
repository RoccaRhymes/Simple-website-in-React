import React, { Component } from "react"
import { Container, Form, Button } from "react-bootstrap"

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: "500px"}}>
                
                <h1 className="text-center"> Support </h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="naprimer@mail.dk"/>
                        <Form.Text>
                            У вас 7 дней на подтверждение почты!
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control as="textarea" rows="1"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckBox">
                        <Form.Check type = "checkbox" label="Я принимаю лицензионное соглашение."/>
                    </Form.Group>
                    <Button variant = "outline-success" type = "submit">Confirm</Button>
                
                </Form>
            </Container>
        )
    }
}