
import {Card, Image, Button, Container, Row, Col} from 'reactstrap';
import {useNavigate } from 'react-router-dom';
import  { useState } from "react";

function Home ({avgRating}) {

    const navigate = useNavigate();

    const locations = [
        {
            id: 0,
            name: "Soap Factory",
            image: require("../assets/soap.jpg"),
            website: "https://thesoapfactory.business.site/",
            address: "Soap Factory, 1411 W Center St, Provo, UT 84601",
            phone: "tel:(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock."
        },
        {
            id: 1,
            name: "Quarry: Indoor Climbing Center",
            image: require("../assets/quarry.jpg"),
            website: "https://www.provo.org/community/parks-and-trails/quarry-park",
            address: "Quarry: Indoor Climbing Center, 1700 E 650 S, Provo, UT 84606",
            phone: "tel:(801) 852-6606",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to feel like you're in a post-apocalyptic wasteland without all the actual danger and destruction? The Quarry has got you covered! This abandoned rock quarry has been turned into a park with hiking trails, a pond, and plenty of spots to sit and contemplate the meaning of life. Just don't fall in the pond, because who knows what kind of creatures lurk in there."
        },
        {
            id: 3,
            name: "other fun",
            image: require("../assets/kolache.jpg"),
            website: " https://hruskaskolaches.com/",
            address: "Hruska's Kolaches, 434 W Center St, Provo, UT 84601",
            phone: "tel:(801) 607-2485",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to satisfy your hunger with some Eastern European goodness? Hruska's Kolaches has got you covered! With a variety of savory and sweet kolaches, you'll feel like you're in Prague. Plus, the warm and fluffy dough will make you want to stay forever."
        },
        {
            id: 3,
            name: "Hruska's Kolaches",
            image: require("../assets/kolache.jpg"),
            website: " https://hruskaskolaches.com/",
            address: "Hruska's Kolaches, 434 W Center St, Provo, UT 84601",
            phone: "tel:(801) 607-2485",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to satisfy your hunger with some Eastern European goodness? Hruska's Kolaches has got you covered! With a variety of savory and sweet kolaches, you'll feel like you're in Prague. Plus, the warm and fluffy dough will make you want to stay forever."
        }
    ];
    
    const options = [
        {
            id: 0,
            name: "Where Should I Go?",
            image: require("../assets/mapCar.jpg"),
            featured: false,
            link: 'stayHome'
        },
        {
            id: 1,
            name:"Road Stops",
            image: require("../assets/kidsCar.jpg"),
            featured: false,
            link: 'roadtrip'
        },
        {
            id: 2,
            name:"Explore Your Destination",
            image: require("../assets/downtown.jpg"),
            featured: false,
            link: 'city/Provo'
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
        },
        {
            id: 4,
            quote: 'Man cannot discover new oceans unless he has the courage to lose sight of the shore.',
            author: 'Andre Gide'
        },
        {
            id: 5,
            quote: 'Don’t tell me how educated you are, tell me how much you have travelled.',
            author: 'Mohammed'
        },
        {
            id: 6,
            quote: 'Travel is fatal to prejudice, bigotry, and narrow-mindedness.',
            author: 'Mark Twain'
        },
        {
            id: 7,
            quote: 'Surely, of all the wonders of the world, the horizon is the greatest.',
            author: 'Freya Stark'
        },
        {
            id: 8,
            quote: 'The world is a book, and those who do not travel read only one page.',
            author: 'Saint Augustine'
        },
        {
            id: 9,
            quote: 'I haven’t been everywhere, but it’s on my list.',
            author: 'Susan Sontag'
        }

    
    ]

    const [quote, setQuote] = useState(quotes[Math.floor(Math.random()*quotes.length)]);

    // var quote = ''

    // var quote = quotes[Math.floor(Math.random()*quotes.length)];

    // function remix() {
    //     var quote = quotes[Math.floor(Math.random()*quotes.length)];
    //     console.log(quote)
    // }
    

    // home page should just start showing examples for each Selection...
    let n=3
    const shuffled = locations.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, n);

    return (
        <div>
            <Container>
                
                <Row className="my-4">
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
                <Row className="mt-4">
                    <h1>Three Options</h1>
                </Row>
                <Row className="mb-4">
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
                <Row className="mt-4">
                    <h1>Where should I go?</h1>
                    
                </Row>
                <Row className="mb-4">
                    {selected.map((item, idx) => (
                        <Col sm={12} md={4} className="my-4">
                            
                        <Card
                            style={{
                                backgroundColor: '#5637DD'
                            }}
                            // onClick={() => {
                            //     navigate('/');
                            //         }
                            //      }
                            >
                            <img
                                src={item.image}
                                height="50%"
                                // onClick={() => {
                                //     navigate()
                                //     }
                                //  }
                            />
                            <h1 style={{
                                color: '#fff'
                            }}>{item.name}</h1>
                            <p>{item.description}</p>

                            <Row className='mb-3'>
                                <Col ms={1}>
                                
                                </Col>
                                <Col ms={4}>
                                    <Button as="a" href={item.phone}>Call</Button>
                                </Col>
                                <Col ms={2}>
                                
                                </Col>
                                <Col ms={4}>
                                    
                                    <Button as="a" href={'https://www.google.com/maps/search/?api=1&query=' + item.address} target="_blank"> Directions </Button>
                                </Col>
                                <Col ms={1}>
                                
                                </Col>
                            </Row>
                            </Card>
                            </Col>
                        )
                        )
                        }
                    </Row>
                <Row className="mt-4">
                    <h1>Road Stops Along the Way</h1>
                </Row>
                <Row className="mb-4">
                {selected.map((item, idx) => (
                        <Col sm={12} md={4} className="my-4">
                            
                        <Card
                            style={{
                                backgroundColor: '#5637DD'
                            }}
                            // onClick={() => {
                            //     navigate('/');
                            //         }
                            //      }
                            >
                            <img
                                src={item.image}
                                height="50%"
                                // onClick={() => {
                                //     navigate()
                                //     }
                                //  }
                            />
                            <h1 style={{
                                color: '#fff'
                            }}>{item.name}</h1>
                            <p>{item.description}</p>

                            <Row className='mb-3'>
                                <Col ms={1}>
                                
                                </Col>
                                <Col ms={4}>
                                    <Button as="a" href={item.phone}>Call</Button>
                                </Col>
                                <Col ms={2}>
                                
                                </Col>
                                <Col ms={4}>
                                    
                                    <Button as="a" href={'https://www.google.com/maps/search/?api=1&query=' + item.address} target="_blank"> Directions </Button>
                                </Col>
                                <Col ms={1}>
                                
                                </Col>
                            </Row>
                            </Card>
                            </Col>
                        )
                        )
                        }
                </Row>
                <Row className="mt-4">
                    <h1>What to do when you get there</h1>
                </Row>
                <Row >
                {selected.map((item, idx) => (
                        <Col sm={12} md={4} className="my-4">
                            
                        <Card
                            style={{
                                backgroundColor: '#5637DD'
                            }}
                            // onClick={() => {
                            //     navigate('/');
                            //         }
                            //      }
                            >
                            <img
                                src={item.image}
                                height="50%"
                                // onClick={() => {
                                //     navigate()
                                //     }
                                //  }
                            />
                            <h1 style={{
                                color: '#fff'
                            }}>{item.name}</h1>
                            <p>{item.description}</p>

                            <Row className='mb-3'>
                                <Col ms={1}>
                                
                                </Col>
                                <Col ms={4}>
                                    <Button as="a" href={item.phone}>Call</Button>
                                </Col>
                                <Col ms={2}>
                                
                                </Col>
                                <Col ms={4}>
                                    
                                    <Button as="a" href={'https://www.google.com/maps/search/?api=1&query=' + item.address} target="_blank"> Directions </Button>
                                </Col>
                                <Col ms={1}>
                                
                                </Col>
                            </Row>
                            </Card>
                            </Col>
                        )
                        )
                        }
                </Row>
            </Container>
        </div>
    )

}

export default Home;
