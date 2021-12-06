import { Container, Row, Col } from 'react-bootstrap'
import CardNormal from '../../../Shared/Cards/CardNormal'


const EditorsPick = ({ data, title }) => {
    return (
        <>
            <section>
                <div className="--s-header">
                    <Container>
                        <h2 className="--s-title">{title}</h2>
                    </Container>
                </div>

                <div className="--s-body">
                    <Container>
                        <Row>
                            {data?.map(item => (
                                <Col lg={3} md={3} sm={12} key={item._id}>
                                    <CardNormal className="gh-card-ra" url={`/articles/${item.slug}`} id={item._id} image={item.image} title={item.title} subtitle={[ item._type, item.category]} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default EditorsPick
