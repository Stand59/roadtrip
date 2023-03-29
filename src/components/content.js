
import {useNavigate } from 'react-router-dom';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import React, {Component} from 'react';
  import  { useState } from "react";
  import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Container,
    Row,
    Col,
} from 'reactstrap';

import Logo from '../assets/logo2.png'
import Home from './home';
import Stay from './stay';
import City from './city';
import Roadtrip from './roadtrip';


  export default function Content() {
// class Content extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //       shortName: "empty",
//     //     };
//     //   }




    const [shortName, setName] = useState('hello');
    const [shortName2, setName2] = useState('hello');
    const [data11, setData11] = useState('hello');
    const [isOpen, setIsOpen] = React.useState(false);
    const [destination, setDestination ] = useState('provo');

        return (
            <>
            <Navbar className="navbar" expand="md">
                <Container>
                    <Row>
                        <Col sm={3}>
                        <NavbarBrand href="/"><img src={Logo} width="70px" /></NavbarBrand>
                        </Col>
                        <Col>
                            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                            <Collapse isOpen={isOpen} navbar>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="stayHome">Where to Go</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="roadtrip">Stops in Route</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="city">Explore Your Destination</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="author">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="author">Contact Us</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <BrowserRouter>
            <div>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route path="stayHome" element={<Stay/>}/>
                <Route path="city" element={<City destination={destination} setDestination={setDestination} />}/>
                <Route path="roadtrip" element={<Roadtrip/>}/>
                {/* <Route path='book' element={<Stay setDatas={setData11} data11={data11} shortName45={shortName} shortName22={shortName2} setName2={setName2}/>}/>
                <Route path="author" element={<Town/>}/> */}
            </Routes>
            </div>
        </BrowserRouter>
        </>
        );
      }