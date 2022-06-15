
import React, { Component } from "react"
import {Container, Tab, Nav, Row, Col, Button,} from "react-bootstrap"

export default class About extends Component {
    render() {
        return (
            <Container>
                
                <Tab.Container id = "ledt-tabs-example" defaultActiveKey = "first">
                    
                    <Row>
                        
                        <Col sm = {3}>
                            
                            <Nav variant = "pills" className = "flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">iAmF4T4L</Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Izzy Laif</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        
                        </Col>
                        
                        <Col sm = {9}>
                            
                            <Tab.Content className="mt-3">
                                
                                <Tab.Pane eventKey = "first">
                                 <img src="https://sun9-76.userapi.com/s/v1/if2/3iJiM6zLKWomrgvBGjfJxUhItuUSEajblaE64tlhoSCZJvPnFj8v93dK3CUIwM2yzffxP_XCbKqNysDE6kPGbYQQ.jpg?size=375x499&quality=95&type=album"/>
                                 <p>iAmF4T4L - Гаджи Бейбутов , тобиж я . Основатель тестового форума, на момент создания 17 лет.</p>
                                 
                                 <Button  variant ="outline-primary" href = "https://vk.com/iamf4t4l">VK </Button>
                                </Tab.Pane>
                                
                                <Tab.Pane eventKey = "second">
                                 <img src="https://sun9-36.userapi.com/s/v1/if2/ys0hLohMJkyig3amtMLqbsQnnCTlfG1tt0ASqQWigboYdnbGvocIOSjPW1HZUEWtklTTef27Bg4x8egDRh812u75.jpg?size=399x500&quality=95&type=album"/>
                                 <p>Izzy Laif - Андрей Королёв, главный мотиватор, просто хороший и умный человек, владелец канала на Youtube. </p> 
                                
                                <Button variant= "outline-danger" href="https://www.youtube.com/c/IzzyLaif">YouTube</Button>
                                <div>
                                <Button variant= "outline-primary" href = "https://vk.com/izzytop">VK</Button>
                                </div>
                                </Tab.Pane>

                            </Tab.Content>
                        
                        </Col>
                    </Row>
                </Tab.Container>
            
            </Container>
        )
    }
}