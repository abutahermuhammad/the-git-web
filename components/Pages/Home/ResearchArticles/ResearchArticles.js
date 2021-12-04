import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { imageBuilder } from '../../../../lib/sanity'
import Date from '../../../core/date'


const ResearchArticles = ({ data }) => {
    console.log('Research Articles: ', data)

    return (
        <>
            <section className="gh-s-research-articles">
                <div className="--s-header">
                    <Container>
                        <h2 className="--s-title">LATEST ARTICLES</h2>
                    </Container>
                </div>

                <div className="--s-body">
                    <Container>
                        {/* <Row>
                            <Col lg={12} md={12} ms={12}> */}
                                {data?.map(item => (
                                    <Card key={item._id} className="gh-card-full-width">
                                        
                                        <Card.Body>
                                            <Row>
                                                <Col lg={9} md={9} sm={8} xs={8}>
                                                    <Row>
                                                        <Col lg={3} md={3} sm={12}>
                                                            <Card.Subtitle className="--card-cat"><span>{ item.category }</span></Card.Subtitle>
                                                            <Card.Text className="--card-date mb-2">
                                                                <Date dateString={item.date._publishedAt} />
                                                            </Card.Text>
                                                        </Col>
                                                        
                                                        <Col lg={9} md={9} sm={12}>
                                                            
                                                            <Card.Title>
                                                                <Link as={`/articles/${item.slug}`} href={`/articles/[slug]`}>
                                                                    {item.title}
                                                                </Link>
                                                            </Card.Title>
                                                            
                                                            <Card.Text className="--card-excerpt">{item.excerpt}</Card.Text>
                                                            
                                                            <Card.Text className={`--card-author --author-${ item.author._id }`}>{ item.author.name }</Card.Text>
                                                        </Col>
                                                    </Row>
                                                </Col>

                                                <Col lg={3} md={3} sm={4} xs={4}>
                                                    {/* <Card.Img src={item.img} /> */}
                                                    {/* <img src={item.img} /> */}
                                                    <div>
                                                        <Image src={imageBuilder(item.image).width(253).height(168).url()} width={253} height={168} alt={item.title} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                ))}
                            {/* </Col>
                        </Row> */}
                    </Container>
                </div>
            </section>
        </>
    )
}

export default ResearchArticles
