import Link from 'next/link'
import { Container, Row, Col, Card } from 'react-bootstrap'
import CardNormal from '../../../Shared/Cards/CardNormal'
import CardWithOutImage from '../../../Shared/Cards/CardWithOutImage'


const data = [
    {
        _id: 'DF445',
        img: '/img/f0.jpg',
        category: 'Physics',
        title: 'Physicists Edge Closer to Taming the Three-Body Problem',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF446',
        img: '/img/f1.jpg',
        category: 'Insect',
        title: 'New pumpkin toadlet species found—and it secretly glows in the dark',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF486',
        img: '/img/f2.jpg',
        category: 'Chemistry',
        title: 'How well can molecules be generated by AI?',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF466',
        img: '/img/f3.jpg',
        category: 'Medical',
        title: 'Retrospectively registered trials: the Editors’ dilemma',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]

const ReviewAndAnalysis = () => { 
    return (
        <>
            <section className="gh-s-review-analysis">
                <div className="--s-header">
                    <Container>
                        <Row>
                            <Col lg={9} md={4} sm={12}>
                                <h2 className="--s-title">Review & Analysis</h2>
                            </Col>

                            {/* Populer Area */}
                            <Col lg={3} md={8} sm={12}>
                                <h2 className="--s-title">Populer</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="--s-body">
                    <Container>
                        <Row>
                            <Col lg={9} md={4} sm={12}>
                                <Row>
                                    <Col lg={12} md={12} sm={12}>
                                        <Link href={`/`}>
                                            <a className="gh-card">
                                                <Card className="gh-card-wide mb-5">
                                                    <Card.Img src={`/img/ra1.jpg`} />
                                                    <Card.Body>
                                                        <Card.Subtitle><span>Article</span>/Physics</Card.Subtitle>
                                                        <Card.Title>Making large-scale, functional, electronic textiles</Card.Title>
                                                        <Card.Text>Large-area display textiles can be produced by weaving transparent conductive weft and luminescent warp fibres using an industrial rapier loom. The integration of interactive functionalities, such as a keyboard and power supply, with the display textile forms an electronic textile system that can serve as a communication tool.</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </a>
                                        </Link>
                                    </Col>

                                    {data?.map(item => (
                                        <Col lg={3} md={3} sm={12} key={item._id}>
                                            <CardNormal className="mb-4 gh-card-ra" url={`/article/${item._id}`} id={item._id} img={item.img} title={item.title} subtitle={item.category} />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>

                            <Col lg={3} md={8} sm={12}>
                                <div className="--s-sidebar">
                                    {data?.map(item => (
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