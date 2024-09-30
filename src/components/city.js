import {Card, Image, Button, Container, Row, Col, Input} from 'reactstrap';
import {useNavigate, Link } from 'react-router-dom';
import  { useState } from "react";

function City ({setDestination, destination}) {

    const navigate = useNavigate();

    const santaquin = [
        {
            id: 0,
            name: "Rowley's Red Barn",
            image: require("../assets/rowleyNo.jpg"),
            website: "https://rowleysredbarn.com/",
            address: "901 S. 300 W. Santaquin, UT 84655",
            phone: "(801) 754-5511",
            blog: "",
            rating: "",
            featured: false,
            description: "Rowley's Red Barn is a must-visit destination in Santaquin, Utah. The iconic red barn sits on a picturesque farm surrounded by breathtaking views of the Wasatch Mountains. As you enter the property, you'll be greeted by the aroma of fresh-baked pies and other delectable treats. The barn is home to a country store where you can find a wide selection of homemade jams, honey, pickles, and more. They also have a charming gift shop with unique handmade items, perfect for souvenirs. The highlight of Rowley's Red Barn is undoubtedly their famous apple cider donuts, made fresh daily and served warm. The barn is open year-round, and during the fall, visitors can enjoy apple picking and a pumpkin patch. With its warm and welcoming atmosphere, Rowley's Red Barn is a delightful place to stop and spend some time in Santaquin.",
            city: "Santaquin",
            photoOK: "yes"
        }
    ]
    
    const cedarCity = [
        {
            id: 0,
            name: "Frontier Homestead Museum",
            image: require("../assets/fronteir.jpg"),
            website: "https://frontierhomestead.org/",
            address: "Frontier Homestead State Park Museum, `635 N Main St, Cedar City, UT 84721",
            phone: "(435) 586-9290",
            blog: "",
            rating: "",
            featured: false,
            description: "The Frontier Homestead Museum in Cedar City, Utah is a blast from the past! If you want to experience life like the pioneers did, this is the place to be. You can explore a replica of a pioneer cabin, a blacksmith shop, a dairy barn, and even a schoolhouse. Plus, there are horse-drawn carriages, wagons, and farm equipment on display that will take you back in time. The museum offers tours and educational programs for all ages, so it's perfect for families, history buffs, and anyone who wants to have a fun and informative experience. Don't miss out on this gem of a museum in Cedar City - it's definitely worth a visit!",
            city: "Cedar City",
            photoOK: "yes"
        },
        {
            id: 0,
            name: "Utah Shakespeare Festival",
            image: require("../assets/shakespear.jpg"),
            website: "https://www.bard.org/",
            address: "Utah Shakespeare Festival, 195 W Center St, Cedar City, UT 84720",
            phone: "435-586-7878",
            blog: "",
            rating: "",
            featured: false,
            description: `If you're a fan of Shakespeare, then the Shakespearean Festival in Cedar City, Utah is a must-see event! This festival is a magical celebration of all things Shakespearean, with performances of his plays in a stunning outdoor amphitheater.

            The festival features a range of performances, from classic Shakespearean plays like Romeo and Juliet and Macbeth, to lesser-known works like The Two Noble Kinsmen and Cymbeline. The actors are incredibly talented and bring the characters to life in a way that will leave you feeling like you're part of the action.
            
            Not only is the festival a treat for the ears, but it's also a feast for the eyes. The costumes and sets are absolutely gorgeous, transporting you to another time and place. And if you need a break from the performances, there are plenty of food vendors and craft booths to explore.
            
            Whether you're a die-hard Shakespeare fan or just looking for a unique and entertaining experience, the Shakespearean Festival in Cedar City, Utah is a must-visit destination. Don't miss out on this unforgettable celebration of the Bard and his timeless works!`,
            city: "Cedar City",
            photoOK: "yes"
        },
        {
            id: 0,
            name: "Cedar Breaks National Monument",
            image: require("../assets/cedarBreak.jpg"),
            website: "https://www.nps.gov/cebr/index.htm",
            address: "2390 West Highway 56 Suite #11 Cedar City, UT 84720",
            phone: "(435) 986-7120",
            blog: "",
            rating: "",
            featured: false,
            description: "Cedar Breaks National Monument is a stunning natural wonder located in southwestern Utah. This breathtaking destination boasts a massive natural amphitheater that stretches over 3 miles in length and almost 2,500 feet deep, showcasing vibrant colors of orange, red, and pink, which are especially impressive during sunrise and sunset. The monument is home to a diverse range of flora and fauna, including bristlecone pine trees, mule deer, and golden eagles. Visitors can explore the monument through various hiking trails and overlooks, offering incredible panoramic views of the surrounding landscape. Cedar Breaks is truly a hidden gem of the American Southwest, and a must-see destination for any nature enthusiast or adventure seeker.",
            city: "Cedar City",
            photoOK: "yes"
        },
    ]

    const stGeorge = [
        {
            id: 0,
            name: "st george1",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "St. George"
        },
        {
            id: 0,
            name: "st george2",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "St. George"
        },
        {
            id: 0,
            name: "st george3",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "St. George"
        },
    ]

    const lasVegas = [
        {
            id: 0,
            name: "Lion Habitat Ranch",
            image: require("../assets/lion.jpg"),
            website: "https://lionhabitatranch.org/",
            address: "Lion Habitat Ranch inc, 382 Bruner Ave, Henderson, NV 89044",
            phone: "(702) 595-6666",
            blog: "",
            rating: "",
            featured: false,
            description: "The Lion Habitat Ranch in Las Vegas is an incredible destination that offers visitors a rare opportunity to get up close and personal with some of the world's most magnificent animals. Located just a short drive from the Las Vegas Strip, this 8-acre ranch is home to over 40 lions, including white lions, as well as a variety of other exotic animals. Visitors can take guided tours of the facility, during which they will learn about the animals, their behavior, and the important conservation efforts being made to protect them. The highlight of any visit to the Lion Habitat Ranch is undoubtedly the chance to watch the lions in action, as they run, play, and interact with each other in their natural habitat. Whether you're a wildlife enthusiast or simply looking for an unforgettable experience, the Lion Habitat Ranch is a must-visit destination in Las Vegas.",
            city: "Las Vegas"
        },
        {
            id: 0,
            name: "Wet'n'Wild Las Vegas",
            image: require("../assets/wetWild.jpg"),
            website: "https://en.wikipedia.org/wiki/Wet_%27n_Wild_(Las_Vegas)",
            address: "Wet'n'Wild Las Vegas, 7055 S Fort Apache Rd, Las Vegas, NV 89148",
            phone: " (702) 979-1600",
            blog: "",
            rating: "",
            featured: false,
            description: "Wet'n'Wild is an exciting water park located in Las Vegas, offering visitors an escape from the heat of the desert. With over 25 thrilling attractions, including water slides, wave pools, and lazy rivers, there is something for everyone at this water park. The park features several adrenaline-pumping slides, such as the Tornado, where riders are hurled into a massive funnel, and the Constrictor, a tube slide that twists and turns through tight curves. There are also several attractions designed for families and younger children, such as the Splash Island play area and the Kiddie Cove. Visitors can rent cabanas for added comfort and privacy or grab a bite to eat at one of the park's several restaurants and snack bars. Whether you're seeking a day of relaxation or non-stop thrills, Wet'n'Wild is the perfect destination for a fun-filled day in Las Vegas.",
            city: "Las Vegas"
        },
        {
            id: 0,
            name: "Marvel Avengers Station",
            image: require("../assets/marvel.jpg"),
            website: "https://www.stationattraction.com/",
            address: "Marvel Avengers S.T.A.T.I.O.N., 3300 S Las Vegas Blvd, Las Vegas, NV 89109",
            phone: "702-894-7626",
            blog: "",
            rating: "",
            featured: false,
            description: "Marvel Avengers Station is a one-of-a-kind attraction located in Las Vegas that immerses visitors into the world of the Marvel Cinematic Universe. As soon as you enter the facility, you are transported into the world of S.H.I.E.L.D, the espionage agency that features prominently in the movies. The Station features a variety of interactive exhibits and displays that allow you to explore the world of Marvel's most beloved superheroes, including Iron Man, Captain America, Thor, and the Hulk. Visitors can participate in various simulations and interactive experiences that allow them to test their own superhero abilities and learn about the science behind their favorite characters. Whether you're a die-hard Marvel fan or simply looking for a fun and interactive experience, the Marvel Avengers Station in Las Vegas is definitely worth a visit.",
            city: "Las Vegas"
        },
    ]

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
        },
        {
            id: 10,
            name: "High Country Rafting Adventure",
            image: require("../assets/beach.jpg"),
            website: "https://www.viator.com/tours/Provo/High-Country-Adventure/d50801-132412P1?pid=P00094667&mcid=42383&medium=link&medium_version=selector&campaign=PrivateUtahHighCountryAdventure",
            address: "Provo Beach Resort, 4801 N University Ave #210, Provo, UT 84604",
            phone: "tel:(801) 224-5001",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to have a beach day without leaving the landlocked state of Utah? Provo Beach has got you covered! With an indoor surfing simulator, a ropes course, laser tag, mini golf, and a giant arcade, you'll feel like you're at the beach... if the beach also had laser guns and neon lights. Come for the waves, stay for the fun!"
        },
    ];

    // let newThing = Object.values(destination);
    // console.log(newThing)

    
    let currentPath = window.location.pathname;
    // console.log(currentPath)
    let newCurrentPath = currentPath.slice(6);
    console.log(newCurrentPath)
    let lowerCase = newCurrentPath.charAt(0).toLowerCase() + newCurrentPath.slice(1);
    
    if (newCurrentPath) {
 
    console.log(lowerCase)
    setDestination(lowerCase)
    }

    

    const handleChange = event => {
        // console.log(event.target.value);
        
        setDestination(event.target.value);
    
      };

    //   console.log(destination)  
    //   console.log(provo)
      
    

    // let shuffledDestination = newThing.sort(function(){return .5 - Math.random()});

    let shuffledDestination = ''
    //   console.log(destination);
    if (destination === 'provo' ) {
         shuffledDestination = provo.sort(function(){return .5 - Math.random()});
    } if (destination === 'cedarCity' ) {
         shuffledDestination = cedarCity.sort(function(){return .5 - Math.random()});
    } if (destination === 'stGeorge' ) {
         shuffledDestination = stGeorge.sort(function(){return .5 - Math.random()});
    } if (destination === 'lasVegas' ) {
         shuffledDestination = lasVegas.sort(function(){return .5 - Math.random()});
    } if (destination === 'sanDiego' ) {
         shuffledDestination = sanDiego.sort(function(){return .5 - Math.random()});
   } else {
        console.log('error')
   }
    // var shuffledSanDiego = sanDiego.sort(function(){return .5 - Math.random()});
    // // var selected=shuffled.slice(0,n);

    let capitolized = destination.charAt(0).toUpperCase() + destination.slice(1);

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
                     <div className='mb-2'>What's your destination? </div>
                     <Input type="select" onChange={handleChange}>
                        <option key="1" value="provo">Provo, UT</option>
                        <option key="2" value='cedarCity' >Cedar City, UT</option>
                        <option key="3" value='stGeorge' >St. George, UT</option>
                        <option key="4" value='lasVegas' >Las Vegas, NV</option>
                        <option key="5" value='sanDiego' >San Diego, CA</option>
            
                     </Input>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{capitolized}</h1>
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
