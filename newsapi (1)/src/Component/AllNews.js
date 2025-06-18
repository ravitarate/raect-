import { useEffect, useState } from "react";
import { Container, Alert, Col, Row, Card } from "react-bootstrap";

export function AllNews(){

    const [Topnews, setTonews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2f74f2e347f24ac8b36a54a6a862e4d7').then((res) => {
            res.json().then((r) => {
                setTonews(r.articles);

            })
        }).catch((error) => {
            console.log(error);
        })
    }, [])


    return (
        <Container className="mt-3">
            <Container>
                <Alert variant="primary">
                    <h1>All News</h1>
                </Alert>
                <p>All news </p>
            </Container>
            <Container className="mt-3">
                <Row>
                    {
                       Topnews.map((a) => {
                            return (
                                <Col lg={6}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{a.Title}</Card.Title>
                                            <Card.Text>
                                                {a.description}
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>

            </Container>

        </Container>
    )
}