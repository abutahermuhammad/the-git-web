import Link from 'next/link'
import { Row, Col, Container } from 'react-bootstrap'


const ArticleFooter = () => {
    return (
        <>
            <div className="--single--footer">
            <Container>
                <div className="--footer-wrapper">
                    {/* Important Linlk */}
                    <div className="--footer-ilink">
                        <h5>Important links:</h5>
                        
                        <div className="--ilink-group">
                            <div className="--ilink-item">
                                
                                <Row>
                                    <Col lg={1} md={2} sm={2}>
                                        <p>Forum</p>
                                    </Col>
                                    <Col lg={11} md={10} sm={10}>
                                        <p>: 
                                            <Link href={`/`}>
                                                <a className="">
                                                    New pumpkin toadlet species found—and it secretly glows in the dark.
                                                </a>
                                            </Link>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                        
                    {/* Social Link  */}
                    <div className="--footer-social">
                        <h5>Share with:</h5>
                        
                        <div className="--social-group">
                            <Link href={`/`}>
                                <a className="btn btn-sm btn-custom-grey --social-link">
                                    Facebook
                                </a>
                                </Link>
                                
                            <Link href={`/`}>
                                <a className="btn btn-sm btn-custom-grey --social-link">
                                    Instagram
                                </a>
                                </Link>
                                
                            <Link href={`/`}>
                                <a className="btn btn-sm btn-custom-grey --social-link">
                                    Linked in
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

        </>
    )
}

export default ArticleFooter
