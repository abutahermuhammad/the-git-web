import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CardNormal from '../../../Shared/Cards/CardNormal'


const FeaturedPosts = ({ data }) => {
    // console.log("Trending Post: ", data)

    return (
        <>
            <section className="gh-s-featured-post">
                <Container>
                    <Row>
                        {data?.map(item => (
                            <Col lg={3} md={3} sm={12} key={item._id}>
                                <CardNormal className="gh-card-ra" url={`/articles/${item?.slug}`} id={item?._id} image={item?.image} title={item?.title} excerpt={item?.excerpt} subtitle={[item?._type, item?.category]} />
                                {/* <CardNormal className="mb-4" data={item} /> */}
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FeaturedPosts
