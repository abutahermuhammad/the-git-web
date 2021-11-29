import Link from 'next/link'
import { Container, Row, Col, Card } from 'react-bootstrap'
import CardNormal from '../../../Shared/Cards/CardNormal'


const data = [
    {
        _id: 'DF4445',
        img: '/img/f0.jpg',
        category: 'Physics',
        title: 'Physicists Edge Closer to Taming the Three-Body Problem',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF4446',
        img: '/img/f1.jpg',
        category: 'Insect',
        title: 'New pumpkin toadlet species found—and it secretly glows in the dark',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF4486',
        img: '/img/f2.jpg',
        category: 'Chemistry',
        title: 'How well can molecules be generated by AI?',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF4466',
        img: '/img/f3.jpg',
        category: 'Medical',
        title: 'Retrospectively registered trials: the Editors’ dilemma',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF44446',
        img: '/img/f1.jpg',
        category: 'Insect',
        title: 'New pumpkin toadlet species found—and it secretly glows in the dark',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF44445',
        img: '/img/f0.jpg',
        category: 'Physics',
        title: 'Physicists Edge Closer to Taming the Three-Body Problem',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF44466',
        img: '/img/f3.jpg',
        category: 'Medical',
        title: 'Retrospectively registered trials: the Editors’ dilemma',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        _id: 'DF44486',
        img: '/img/f2.jpg',
        category: 'Chemistry',
        title: 'How well can molecules be generated by AI?',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
]

const EditorsPick = () => {
    return (
        <>
            <section>
                <div className="--s-header">
                    <Container>
                        <h2 className="--s-title">{`EDITOR's PICK`}</h2>
                    </Container>
                </div>

                <div className="--s-body">
                    <Container>
                        <Row>
                            {data?.map(item => (
                                <Col lg={3} md={3} sm={12} key={item._id}>
                                    <CardNormal className="gh-card-ra" url={`/article/${item._id}`} id={item._id} img={item.img} title={item.title} subtitle={item.category} />
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