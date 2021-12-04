import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


const Cookie = () => {
    const [cookie, setCookie] = useState(false)

    return (
        <>
            {cookie && (
                <div className="gh-cookie">
                    <Container>
                        <Row>
                            <Col lg={10} md={10} sm={12}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </Col>
                        
                            <Col lg={2} md={2} sm={12}>
                                <Button onClick={ ()=> setCookie(false)} className="ml-auto mt-2 --cancel" variant="outline-light">Cancel</Button>
                                <Button onClick={ ()=> setCookie(false)} className="ml-2 mt-2 --accept" variant="light">Accept</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </>
    )
}

export default Cookie
