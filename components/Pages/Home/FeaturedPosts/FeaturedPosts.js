import Link from 'next/link'
import { Card, Col, Container, Row } from 'react-bootstrap'
import CardNormal from '../../../Shared/Cards/CardNormal'


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

const FeaturedPosts = () => {
    return (
        <>
            <section className="gh-s-featured-post">
                <Container>
                    <Row>
                        {data?.map(item => (
                            <Col lg={3} md={3} sm={12} key={item._id}>
                                <CardNormal className="mb-4" url={`/article/${item._id}`} id={item._id} img={item.img} title={item.title} subtitle={item.category} excerpt={item.excerpt}  />
                            </Col>
                        ))}
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default FeaturedPosts
