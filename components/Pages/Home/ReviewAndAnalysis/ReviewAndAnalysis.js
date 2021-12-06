import Link from 'next/link'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { imageBuilder } from '../../../../lib/sanity'
import CardNormal from '../../../Shared/Cards/CardNormal'
import CardWithOutImage from '../../../Shared/Cards/CardWithOutImage'


const ReviewAndAnalysis = ({ data }) => {
    const dataPinned = data[0]
    const dataNormal = data.slice(1)
    const dataPopuler = data
    
    return (
        <>
            <section className="gh-s-review-analysis">
                <div className="--s-header">
                    <Container>
                        <Row>
                            <Col lg={9} md={8} sm={12}>
                                <h2 className="--s-title">REVIEW & ANALYSIS</h2>
                            </Col>

                            {/* Populer Area */}
                            <Col lg={3} md={4} sm={0}>
                                <h2 className="--s-title --s-second">POPULER</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="--s-body">
                    <Container>
                        <Row>
                            <Col lg={9} md={8} sm={12}>
                                <Row>
                                    <Col lg={12} md={12} sm={12} className="mb-4" key={dataPinned._id}>
                                        <Link href={`/articles/${dataPinned.url}`}>
                                            <a className="gh-card">
                                                <Card className="gh-card-wide">
                                                    <Card.Img src={imageBuilder(dataPinned.image).width(415).height(277).url()} />
                                                    <Card.Body>
                                                        <Card.Subtitle><span>{dataPinned._type}</span>/{dataPinned.category}</Card.Subtitle>
                                                        <Card.Title>{dataPinned.title}</Card.Title>
                                                        <Card.Text>{dataPinned.excerpt}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </Link>
                                    </Col>

                                    {dataNormal?.map(item => (
                                        <Col lg={3} md={3} sm={12} key={item._id}>
                                            <CardNormal className="mb-4 gh-card-ra" url={`/articles/${item.slug}`} id={item._id} image={item.image} title={item.title} subtitle={[item._type, item.category]} />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>

                            <Col lg={3} md={4} sm={12}>
                                <div className="--s-sidebar">
                                    {dataPopuler?.map(item => (
                                        <CardWithOutImage key={ item._id}/>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </section>
        </>
    )
}

export default ReviewAndAnalysis
