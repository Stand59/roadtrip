import {Card, Image, Button, Container, Row, Col, Input} from 'reactstrap';
import {useNavigate, Link } from 'react-router-dom';
import  { useState } from "react";

function OptionDetails ({thor, useMe2}) {

    const lasVegas = [
        {
            id: 0,
            name: "las vegas1",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "lasVegas"
        },
        {
            id: 0,
            name: "las vegas2",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "lasVegas"
        },
        {
            id: 0,
            name: "las vegas3",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "lasVegas"
        },
    ]
// {useMe2.map((thor, idx) => {
// console.log(thor)
// let city0 = '';
// let city1 = '';
// let city2 = '';


//  eval( 'city' + [idx] + '=' + 'Object.values(thor)[0];'  )

//  let useMe = []

//  if (city0 !== '') {
//      useMe.push(city0);
//  } 
 
//  if (city1 !== '') {
//      useMe.push(city1);
//  } 
 
//  if (city2 !== '') {
//      useMe.push(city2);
//  } 

//  console.log(useMe)

    return(
        

     <Row>
    hi
     {lasVegas.map((item, idx) => {
        return <div>
        
        hi
        {console.log(item)}
                            {/* <Col sm={12} md={4} className="my-4"> */}
                                hello
                                {item}
                                
                            {/* <Card
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
                                </Card> */}
                                {/* </Col>  */}
                                </div>
    })}
                                </Row>
    )}
 
                          


export default OptionDetails;