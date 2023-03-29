import {Card, Image, Button, Container, Row, Col} from 'reactstrap';
import {useNavigate, Link } from 'react-router-dom';

function Roadtrip ({avgRating}) {

    const navigate = useNavigate();
    
    const options = [
        {
            id: 0,
            name: "Stay at Home",
            image: require("../assets/familyHome.jpg"),
            elevation: 1233,
            featured: false,
            description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
        },
        {
            id: 1,
            name:"Expolore Your City",
            image: require("../assets/downtown.jpg"),
            elevation: 877,
            featured: false,
            description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
        },
        {
            id: 2,
            name:"Leave Town",
            image: require("../assets/kidsCar.jpg"),
            elevation: 2901,
            featured: false,
            description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
        },
    ];

    console.log(options)

    return (
        <div>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">https://example.com</a>
            <Container>
                <Row>
                    <Col sm={12} md={4} className="my-4">
                    <Card
                            style={{
                                backgroundColor: '#5637DD'
                            }}
                            onClick={() => {
                                navigate('/');
                                    }
                                 }
                            >
                            <img
                                src='../assets/kidsCar.jpg'
                                width='100%'
                            />
                            <h1 style={{
                                color: '#fff'
                            }}>Where do you want to go?</h1>
                            <Button color="primary">Plan Your Adventure</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Roadtrip;
