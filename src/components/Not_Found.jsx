
import { Container, Row, Col, Image, Nav } from "react-bootstrap";

function NotFound() {
    return (
        <Container className="text-center" >
            <Row className="p-3" >
                <Col>
                    <Image src="./src/assets/uh-oh.jpeg" fluid className="pt-3 rounded-5" />
                </Col>
            </Row>
            <Row className="p-3" >
                <Col>
                    <h2 className="text-warning" >* 404 - Not Found *</h2>
                </Col>
            </Row>
            <Row className="p-3" >
                <Col className="fs-4" >
                    <p>Sorry, the page you are looking for does not exist...</p>
                    <p>
                        You can always go back to the homepage.
                    </p>
                </Col>
            </Row>
            <Nav variant='pills' className="justify-content-center align-content-center p-3" >
                <Nav.Item className="btn btn-outline-secondary">
                    <Nav.Link href="/" className="text-info fw-bold fs-5" >Go Back Home</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
};

export default NotFound;
