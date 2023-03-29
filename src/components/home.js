
import {Card, Image, Button, Container, Row, Col} from 'reactstrap';
import {useNavigate } from 'react-router-dom';
import  { useState } from "react";

function Home ({avgRating}) {

    const navigate = useNavigate();
    
    const options = [
        {
            id: 0,
            name: "Where to Go",
            image: require("../assets/mapCar.jpg"),
            featured: false,
            link: 'stayHome'
        },
        {
            id: 1,
            name:"Stops In Route",
            image: require("../assets/kidsCar.jpg"),
            featured: false,
            link: 'roadtrip'
        },
        {
            id: 2,
            name:"Explore Your Destination",
            image: require("../assets/downtown.jpg"),
            featured: false,
            link: 'city'
        },
    ];

   

    const quotes = [
        {
            id: 0,
            quote: 'Life is either a daring adventure or nothing at all.',
            author: 'Helen Keller'
        },
        {
            id: 1,
            quote: `Time flies when you're having fun.`,
            author: 'Albert Einstein'
        },
        {
            id: 2,
            quote: 'Having fun is not a diversion from a successful life; it is the pathway to it.',
            author: 'Martha Beck'
        },
        {
            id: 3,
            quote: 'It is fun to have fun.',
            author: 'Dr. Seuss'
        }
    ]

    const [quote, setQuote] = useState(quotes[Math.floor(Math.random()*quotes.length)]);

    // var quote = ''

    // var quote = quotes[Math.floor(Math.random()*quotes.length)];

    // function remix() {
    //     var quote = quotes[Math.floor(Math.random()*quotes.length)];
    //     console.log(quote)
    // }
    

    

    return (
        <div>
            <Container>
                <Row >
                    <Col sm={12} md={8} className="my-4">
                        <h2>{quote.quote}</h2>
                        <h4>-{quote.author}</h4>
                    </Col>
                    <Col>
                        <Button color='warning' className="my-4" 
                            onClick={() => {
                                setQuote(quotes[Math.floor(Math.random()*quotes.length)])
                            }}
                        >
                            Remix
                        </Button>
                    </Col>
                </Row>
                <Row>
                    {options.map((item, idx) =>(

            
                    <Col key={idx} sm={12} md={4} className="my-4">
                        <Card
                            style={{
                                backgroundColor: '#5637DD'
                            }}
                            onClick={() => {
                                
                                navigate(item.link);
                                    }
                                 }
                            >
                            <img
                                src={item.image}
                                width='100%'
                            />
                            <h1 style={{
                                color: '#fff'
                            }}>{item.name}</h1>
                            <Button color="primary">Plan Your Adventure</Button>
                        </Card>
                    </Col>
                    )
                    )}
                </Row>
            </Container>
        </div>
    )

}

export default Home;
