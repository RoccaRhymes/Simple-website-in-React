import React, { Component } from "react"
import CarouselBox from "../Components/CarouselBox"
import { Container, Card, CardGroup, Button} from "react-bootstrap"

export default class Home extends Component {
    render() {
        return (
          <> 
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4"> iAmF4T4L.dk </h2>
                <CardGroup>
                   <Card bg="light" border="dark">
                      <Card.Img 
                      variant="top"
                      src="https://sun9-46.userapi.com/s/v1/if2/pm01brYDjbvukAVAXmbIwFGt3DISa7AfSJw7jIFxyGaVjfdsqfu2O37qDun34DEuFIc6UPK5xxPSKs9ZyacduBSS.jpg?size=1280x853&quality=96&type=album"
                      />
                      <Card.Body>
                        <Card.Title>Автомобильный Форум</Card.Title>
                        <Card.Text>Напиши о своей машинке, и пусть весь мир знает о твоей калымаге.</Card.Text>
                        <Button href="/Engine" variant="outline-info">Читать</Button>
                      </Card.Body>
                   </Card>
                   <Card bg="light" border="dark">
                      <Card.Img 
                      variant="top"
                      src="https://sun9-28.userapi.com/s/v1/if2/8f4egFdjrv5XKi-9lWgV3WerDcwHogfMpHyMDUi32Rax_hIXe-qvWngPnibNeHHxklDf3rrh6vZSwu3ZpvFp1-PQ.jpg?size=1280x853&quality=95&type=album"
                      />
                      <Card.Body>
                        <Card.Title>Кто мы и что мы ?</Card.Title>
                        <Card.Text>Группа душевнобольных разработчиков </Card.Text>
                        <Button href="/About" variant="outline-info">Перейти к ознакомлению</Button>
                      </Card.Body>
                   </Card>
                </CardGroup>
            </Container>
          </>
        ) 
    }
}

    