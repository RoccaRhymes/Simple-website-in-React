import React, { Component } from "react"
import {Media, Container, Row, Col, ListGroup, Card} from "react-bootstrap"



export default class Engine extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md = "9">
                            <Media className="m-3">
                                <img
                                 width={300}
                                 height={250}
                                 className="mr-3"
                                 src = "https://avtoexperts.ru/wp-content/uploads/2020/07/nissan_skyline_gt-r_r34.jpg"
                                />
                                 
                                 <Media.Body>
                                    <h5>Blog: Nissan Skyline R34 Sedan</h5>
                                    <p>Отзыв владельца спустя 7 лет, не забудьте подписаться!</p>
                                 </Media.Body> 
                            </Media>
                        </Col>

                        <Col md = "9">
                            <Media className="m-3">
                                <img
                                 width={300}
                                 height={250}
                                 className="mr-5"
                                 src = "https://i.pinimg.com/originals/c6/e3/14/c6e314819ee599b9c8bc87585e78d20e.jpg"
                                />
                                 
                                 <Media.Body>
                                    <h5>Blog: Mitsubishi Evolution 9</h5>
                                    <p>Красный в моде, при любой погоде</p>
                                 </Media.Body> 
                            </Media>
                        </Col>

                        <Col md = "3">
                        <h5 className="text-center mt-5" >Brand Auto</h5>
                            
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Nissan</ListGroup.Item>
                                    <ListGroup.Item>Mitsubishi</ListGroup.Item>
                                </ListGroup>
                            </Card>
                            
                            <Card className = "mt-3">
                              <Card.Body>
                                
                                <Card.Title> Welcome in Blog Engine v1.2 </Card.Title>
                                <Card.Text> ハンマーで打たれていない釘のせいで、彼らは蹄鉄を失いました。失われた蹄鉄のせいで馬が失われ、失われた馬のため、メッセンジャーはメッセージを届けませんでしたが、伝言未達で敗戦… </Card.Text>
                              
                              </Card.Body>
                            </Card>
                        
                        </Col> 
                    </Row>
                </Container>
            </div>
        );
    }
}