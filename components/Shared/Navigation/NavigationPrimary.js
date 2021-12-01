// Core Imports
import Link from 'next/link'
// UI Component Imports
import { Col, Container, Nav, Navbar, NavDropdown, Row, Button } from 'react-bootstrap'
// Icons
import { IconContext } from "react-icons"
import { GiHamburgerMenu } from "react-icons/gi"
import { BiUserCircle } from "react-icons/bi"

// import { useUser, UserButton } from "@clerk/nextjs";


const NavigationPrimary = ({ data }) => {
    // Get the current user's firstName
    // const { firstName } = useUser();
    const firstName = '';

    return (
        <>            
            <Navbar className="gh_nav_menu" bg="light" expand="lg">
                <Container>
                    {/* <div> */}
                        <div className="gh_nav_menu">
                            <Button variant="outline-dark" size="sm">
                                {/* <IconContext.Provider value={{title: "Menu", size: "16px", color: "#000", className: "gh_menu" }}>
                                    <GiHamburgerMenu />
                                </IconContext.Provider> */}
                                <span>MENU</span>
                            </Button>
                        </div>

                        <div className="gh_nav_brand">
                            <Link href={`/`}>
                                <a className="navbar-brand">
                                    The Gisthive
                                </a>
                            </Link>
                        </div>
                    {/* </div> */}

                    <div>
                        <div className="gh_nav_avater">
                            {firstName ? (
                                // <UserButton/>
                                ''
                            ) : (
                                <Link href={`/login`}>
                                    <a>
                                        <IconContext.Provider value={{title: "Profile Link", size: "25px", color: "#000", className: "global-class-name" }}>
                                            <BiUserCircle />
                                        </IconContext.Provider>
                                    </a>
                                </Link>
                            ) }
                                
                        </div>
                    </div>

                </Container>
            </Navbar>

            <Navbar className="gh_nav_network" expand="lg" bg="light" variant="light">
                <Container>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {data?.map(item => (
                                <Nav.Link href={data.url} key={item._id}>
                                    {item.title}
                                </Nav.Link>
                            ))}
                            
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationPrimary
