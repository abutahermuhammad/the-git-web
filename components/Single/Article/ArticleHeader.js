import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

const ArticleHeader = ({ title, author, category, date, excerpt }) => {

    return (
        <div className="--single--header">
            <Container>
                <div className="--header-wrapper">
                    <h1 className="--single-title">{title}</h1>

                    <p className="--single-meta">Posted at <span>{category}</span> by <span>{author}</span> at <span>{date}</span></p>
                    <p className="--single-excerpt">{excerpt}</p>
                </div>
            </Container>
        </div>
    )
}

export default ArticleHeader
