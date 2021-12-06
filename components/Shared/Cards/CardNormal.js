import React from 'react'
import Link from 'next/link'
import { Card } from 'react-bootstrap'
import { imageBuilder } from '../../../lib/sanity'


const CardNormal = ({ className, url, id, image, title, excerpt, subtitle }) => {
    // console.log('data: ', data)

    // let type;

    // if (data?._type === "post") {
    //     type = "Article"
    // } else if (data?._type === "news") {
    //     type = "News"
    // }
    
    return (
        <>
            <Link as={url} href={`/articles/[slug]`}>
                <a className="gh-card">
                    <Card className={`${className} gh-card-${id}`}>
                        <Card.Img src={imageBuilder(image).width(253).height(168).url()} />

                        <Card.Body>
                            <Card.Subtitle className="text-muted">
                                {`${subtitle[0]} / ${subtitle[1]}` }
                            </Card.Subtitle>
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
