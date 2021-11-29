import { Card } from 'react-bootstrap'
import Link from 'next/link'


const CardWithOutImage = () => {
    return (
        <>
            <Card className="gh-card-no-img">
                <Card.Body>
                    <Link href={`/`}>
                        <a>
                            <Card.Title>‘Mother Trees’ Are Intelligent: They Learn and Remember</Card.Title>
                        </a>
                    </Link>
                    <Card.Text>AT. Muhammad H.</Card.Text>
                    <Card.Subtitle><span>Insect World</span> / 28 May, 2021</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardWithOutImage
