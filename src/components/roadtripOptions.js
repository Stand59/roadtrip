import {Card, Image, Button, Container, Row, Col, Input} from 'reactstrap';
import {useNavigate, Link } from 'react-router-dom';
import  { useState } from "react";
import OptionDetails from './optionDetails';

function RoadtripOptions ({useMe2}) {

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

 console.log(useMe2)

    return(
        <div>
        {useMe2.map((item, idx) => (
              
            <OptionDetails thor={item} useMe2={useMe2} />
        ))}
        </div>
        )}

     {/* <Row>
    
     {useMe.map((item, idx) => {
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
    })}
                                </Row>
                                 )
                            })
                        }} */}
 
                          


export default RoadtripOptions;