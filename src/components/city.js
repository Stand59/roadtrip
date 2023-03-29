import {Card, Image, Button, Container, Row, Col, Input} from 'reactstrap';
import {useNavigate, Link } from 'react-router-dom';
import  { useState } from "react";

function City ({setDestination, destination}) {

    const navigate = useNavigate();
    
    const sanDiego = [
        {
            id: 0,
            name: "La Jola Shores Beach",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description"
        },
        {
            id: 0,
            name: "Soap Factory",
            image: require("../assets/soap.jpg"),
            website: "https://www.thesoapfactoryutah.com/",
            address: "1411 W Center St, Provo, UT 84601",
            phone: "(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock."
        },
        {
            id: 0,
            name: "Soap Factory",
            image: require("../assets/soap.jpg"),
            website: "https://www.thesoapfactoryutah.com/",
            address: "1411 W Center St, Provo, UT 84601",
            phone: "(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock."
        },
        {
            id: 0,
            name: "Soap Factory",
            image: require("../assets/soap.jpg"),
            website: "https://www.thesoapfactoryutah.com/",
            address: "1411 W Center St, Provo, UT 84601",
            phone: "(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock."
        },
        {
            id: 0,
            name: "Soap Factory",
            image: require("../assets/soap.jpg"),
            website: "https://www.thesoapfactoryutah.com/",
            address: "1411 W Center St, Provo, UT 84601",
            phone: "(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock."
        },
        {
            id: 0,
            name: "Soap Factory",
            image: require("../assets/soap.jpg"),
            website: "https://www.thesoapfactoryutah.com/",
            address: "Soap Factory, 1411 W Center St, Provo, UT 84601",
            phone: "(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock."
        },
    ]

    const provo = [
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
            name: "Hruska's Kolaches",
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
            id: 4,
            name: "Peaks Ice Arena",
            image: require("../assets/peak.jpg"),
            website: "https://www.provo.org/community/peaks-ice-arena",
            address: "Peaks Ice Arena, 100 N Seven Peaks Blvd, Provo, UT 84606",
            phone: "tel:(801) 852-7465",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to skate like a pro and show off your moves on the ice? The Peaks Ice Arena is the place to be! It's like Dancing With the Stars, but with skates and fewer sequins. Plus, you can't beat the feeling of the wind in your hair as you glide across the ice. Just don't forget to wear a helmet, because falling on your head is never a good thing."
        },
        {
            id: 5,
            name: "BYU Creamery on 9th",
            image: require("../assets/byucream.jpg"),
            website: "https://creamery.byu.edu/",
            address: "BYU Creamery on 9th, 1209 N 900 E, Provo, UT 84602",
            phone: "tel:(801) 422-2663",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to cool off and get your dairy fix? Head over to The BYU Creamery! They have all kinds of delicious ice cream flavors, like raspberry fudge chunk and mint brownie. Plus, you can pretend you're in an old-timey soda fountain and order a milkshake. Just don't forget to bring your poodle skirt and leather jacket."
        },
        {
            id: 6,
            name: "Provo City Library",
            image: require("../assets/library.jpg"),
            website: "https://www.provolibrary.com/",
            address: "Provo City Library, 550 N University Ave, Provo, UT 84601",
            phone: "tel:(801) 852-6650",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get lost in a good book and feel smart? Head over to the Provo City Library! They have all kinds of books, from classic literature to trashy romance novels. Plus, you can"
        },
        {
            id: 7,
            name: "Center Street Musical Theatre",
            image: require("../assets/theater.webp"),
            website: "https://centerstreetmt.com/",
            address: "Center Street Musical Theatre, 177 W Center St, Provo, UT 84601",
            phone: "tel:(801) 373-4485",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get entertained and show off your singing skills? Head over to Center Street Musical Theatre! They have live musical performances that are sure to make you tap your feet and sing along. Plus, you can pretend you're auditioning for American Idol and belt out your favorite showtunes. Just don't forget your jazz hands."
        },
        {
            id: 8,
            name: "BYU Book Store",
            image: require("../assets/byustore.jpg"),
            website: "https://www.byustore.com/",
            address: "BYU Book Store, 1075 E Campus Dr, Provo, UT 84602",
            phone: "tel:(801) 422-2400",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get your study on and show off your school spirit? Head over to the BYU Bookstore! They have all the textbooks you need to get your learn on, plus BYU apparel to show off your school pride. Plus, you can pretend you're Hermione Granger and buy all the textbooks you'll never actually read. Just don't forget to bring your wand."
        },
        {
            id: 9,
            name: "Provo Beach Resort: Family Fun",
            image: require("../assets/beach.jpg"),
            website: "https://provobeach.com/",
            address: "Provo Beach Resort, 4801 N University Ave #210, Provo, UT 84604",
            phone: "tel:(801) 224-5001",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to have a beach day without leaving the landlocked state of Utah? Provo Beach has got you covered! With an indoor surfing simulator, a ropes course, laser tag, mini golf, and a giant arcade, you'll feel like you're at the beach... if the beach also had laser guns and neon lights. Come for the waves, stay for the fun!"
        }
    ];

    // let newThing = Object.values(destination);
    // console.log(newThing)


    

    const handleChange = event => {
        console.log(event.target.value);
        
        setDestination(event.target.value);
    
      };

    //   console.log(destination)  
    //   console.log(provo)
      
    

    // let shuffledDestination = newThing.sort(function(){return .5 - Math.random()});

    let shuffledDestination = ''
      console.log(destination);
    if (destination === 'provo' ) {
         shuffledDestination = provo.sort(function(){return .5 - Math.random()});
    } else{
        shuffledDestination = sanDiego.sort(function(){return .5 - Math.random()});
    }
    // var shuffledSanDiego = sanDiego.sort(function(){return .5 - Math.random()});
    // // var selected=shuffled.slice(0,n);

    

    let n=3
    // const [selected, setSelected] = useState(shuffledProvo.slice(0,n));

    return (
        <div>
            
            <Container>
                <Row className='my-4'>

                    <Col sm={2}></Col>
                    <Col >
                        <h1 id='center' className='mt-4'>
                            Explore Your Destination
                        </h1>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                    
                    </Col>
                    <Col>
                     <div>What's your destination? </div>
                     <Input type="select" onChange={handleChange}>
                        <option key="1" value="provo">Provo</option>
                        <option key="2" value='sanDiego' >San Diego</option>
            
                     </Input>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    {shuffledDestination.map((item, idx) => (
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
                            
                            <Button color="primary" as="a" href={item.website} target="_blank" rel="noopener noreferrer">Visit Their Website</Button>
                            
                        </Card>
                    </Col>
                    ))}
                </Row>
                <Row>
                    <Button color="warning" style={{width: '400px',  }}
                    onClick={() => {
                        // setSelected(shuffledProvo.slice(0,n))
                    }}>
                        More
                    </Button>
                </Row>
            </Container>
        </div>
    )

}

export default City;
