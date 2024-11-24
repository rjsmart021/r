import { Stack, Button, Container, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center bg-body-secondary mt-3 border border-info-subtle rounded" >
                <Stack gap={3} >
                    <Image src="./src/assets/onlineShop.jpeg" fluid className="pt-3 rounded-5" />
                    <header className="text-center p-5" >
                        <h1 className="text-info text-decoration-underline mb-5" >Home Page</h1>
                        <p className="text-white fs-4" >Welcome to the Shopping Center!</p>
                        <br />
                        <Button variant="outline-primary" size="lg" className="shadow-lg" onClick={() => navigate('/products')} >
                            Shop Now!
                        </Button>
                    </header>
                </Stack>
            </Container>

            <Container className="d-flex align-items-center justify-content-center bg-body-secondary mt-3 border border-info-subtle rounded">
                <Stack gap={2} >
                    <Image src="./src/assets/featured.png" fluid className="pt-2 rounded-5" />
                    <section className="d-inline-flex gap-2" >
                        <Card className="p-1" >
                            <Card.Img variant="top" src="./src/assets/gamingDesk.jpeg" rounded />
                            <Card.Body>
                                <Card.Title as='h5' className="text-center" >Desks</Card.Title>
                                <Card.Text className="text-wrap" >
                                    One of the most difficulty things can be selecting the perfect desk for your setup. Click the button below to see our full selection!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="outline-info" className="w-100" onClick={() => navigate('/desks')} >Shop Desks</Button>
                            </Card.Footer>
                        </Card>
                        <Card className="p-1">
                            <Card.Img variant="top" src="./src/assets/gamingDesktop.jpeg" rounded />
                            <Card.Body>
                                <Card.Title as='h5' className="text-center" >Desktops</Card.Title>
                                <Card.Text>
                                    Torn between which desktop is the best for your needs? Click the button below to check out what we have to offer!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-center" >
                                <Button variant="outline-info" className="w-100" onClick={() => navigate('/desktops')} >Shop Desktops</Button>
                            </Card.Footer>
                        </Card>
                        <Card className="p-1">
                            <Card.Img variant="top" src="./src/assets/gamingAccessories.jpeg" rounded />
                            <Card.Body>
                                <Card.Title as='h5' className="text-center" >Gaming Accessories</Card.Title>
                                <Card.Text>
                                    Needing some accessories to enhance your gaming experience? Click the button below to find the top rated items!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="outline-info" className="w-100" onClick={() => navigate('/accessories')} >Shop Accessories</Button>
                            </Card.Footer>
                        </Card>
                    </section>
                </Stack>
            </Container>
        </>
    )
}

export default HomePage;
