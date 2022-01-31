import { Card } from 'react-bootstrap'
import Link from 'next/link'
import Date from '../../core/date'


const CardWithOutImage = ({className, url, date, author, _id, image, title, subtitle}) => {
    console.log('Author: ', author);
    console.log('Date: ', date);

    return (
        <>
            <Card className={`gh-card-no-img ${className}`}>
                <Card.Body>
                    <Link href={url}>
                        <a>
                            <Card.Title>{title}</Card.Title>
                        </a>
                    </Link>
                    <Card.Text>AT. Muhammad H.</Card.Text>
                    <Card.Subtitle>
                        <span>{subtitle[1]?.title}</span>
                         / 
                         <span>
                             {/* <Date dateString={date} /> */}
                        </span>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardWithOutImage
