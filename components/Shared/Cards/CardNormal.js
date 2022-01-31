import React from 'react'
import Link from 'next/link'
import { Card } from 'react-bootstrap'
import { imageBuilder } from '../../../lib/sanity'


const CardNormal = ({ className, url, id, image, title, excerpt, subtitle }) => {
    
    return (
        <>
            <Link as={url} href={`/articles/[slug]`}>
                <a className="gh-card">
                    <Card className={`${className} gh-card-${id}`}>
                        <Card.Img src={imageBuilder(image).width(253).height(168).url()} />

                        <Card.Body>
                            <Card.Subtitle className="text-muted">
                                <span style={{}}>{subtitle[0]}</span>
                                <span> / </span>

                                {subtitle[1]?.title && (
                                    <span>
                                        <Link as={`/categories/${subtitle[1]?.title}`} href={`/categories/[slug]`}>
                                            <a className='text-black'>{subtitle[1]?.title ? subtitle[1]?.title : "Uncategorized"}</a>
                                        </Link>
                                    </span>

                                )}

                                { !subtitle[1]?.title && (<span>Uncategorized</span>)}

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
