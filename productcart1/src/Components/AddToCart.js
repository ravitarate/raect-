import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Container, Col, Row } from "react-bootstrap";


export function AddToCart() {
    const navigate = useNavigate();

    return(
        
        <Container>
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <Card style={{ width: '20rem', height:'37rem'}}>
                        <Card.Img variant="top" src="/mobile.avif" style={{ width: '200px', height: '300px' }} />
                        <Card.Body>
                            <Card.Title>Samsung</Card.Title>
                            <Card.Text>
                                Highlights<br/> 
                                6.9 inches, 1320 x 2868 pixels Display <br/>
                                48MP + 48MP + 12MP Triple Primary Camera, 12MP Single Front Camera <br/>
                                Apple iOS 18 <br/>
                                Apple A18 Bionic (4nm), Hexa Core <br/>
                                Non-removable Li-Ion battery
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate('/cart')}>
                                Add To Cart
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={4}>
                    <Card style={{ width: '20rem', height:'37rem' }}>
                        <Card.Img variant="top" src="/headphone.avif" style={{ width: '200px', height: '300px' }} />
                        <Card.Body>
                            <Card.Title>JBL</Card.Title>
                            <Card.Text>
                                With Mic:Yes<br/>
                                Bluetooth version: 4<br/>
                                Wireless range: 8 m<br/>
                                Battery life: 11 hrs | Charging time: 2 hrs<br/>
                                Extra bass: Add extra thump to your music
                            </Card.Text>
                            <Button variant="primary" onClick={() => navigate('/cart')}>
                                Add To Cart
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}