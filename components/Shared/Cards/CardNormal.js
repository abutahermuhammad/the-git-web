import React from 'react'
import Link from 'next/link'
import { Card } from 'react-bootstrap'


const CardNormal = ({ className, url, id, img, subtitle, title, excerpt }) => {
    return (
        <>
            <Link href={url}>
                <a className="gh-card">
                    <Card className={className}>
                        {img && <Card.Img src={img} />}

                        <Card.Body>
                            {subtitle && <Card.Subtitle className="text-muted">{subtitle}</Card.Subtitle> }
                            {title && <Card.Title>{title}</Card.Title> }
                            {excerpt && <Card.Text>{excerpt}</Card.Text> }
                            
                        </Card.Body>
                    </Card>
                </a>
            </Link>
        </>
    )
}

export default CardNormal
