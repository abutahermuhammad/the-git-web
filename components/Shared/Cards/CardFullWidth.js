import Link from 'next/link'
import Image from 'next/image'
// UI Component
import { Card, Row, Col } from 'react-bootstrap'
// API 
import { imageBuilder } from '../../../lib/sanity'
import Date from '../../core/date'


const CardFullWidth = ({ id, type, slug, date, image, subtitle, title, excerpt, author }) => {
    
    return (
        <div>
            <Card key={id} className="gh-card-full-width">
                                        
            <Card.Body>
                <Row>
                    <Col lg={9} md={9} sm={8} xs={8}>
                        <Row>
                            <Col lg={3} md={3} sm={12}>
                                <Card.Subtitle className="--card-cat"><span>{ subtitle[0] }</span> / { subtitle[1] }</Card.Subtitle>
                                <Card.Text className="--card-date mb-2">
                                    <Date dateString={date} />
                                </Card.Text>
                            </Col>
                            
                            <Col lg={9} md={9} sm={12}>
                                
                                <Card.Title>
                                    <Link as={`/articles/${slug}`} href={`/articles/[slug]`}>
                                        {title}
                                    </Link>
                                </Card.Title>
                                
                                <Card.Text className="--card-excerpt">{excerpt}</Card.Text>
                                
                                <Card.Text className={`--card-author --author-${ author[0] }`}>{ author[1] }</Card.Text>
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={3} md={3} sm={4} xs={4}>
                        {/* <Card.Img src={data.img} /> */}
                        {/* <img src={data.img} /> */}
                        <div>
                            <Image src={image} width={253} height={168} alt={title} />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </div>
    )
}

export default CardFullWidth
