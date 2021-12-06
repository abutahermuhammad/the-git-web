import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { imageBuilder } from '../../../../lib/sanity'
import Date from '../../../core/date'
import CardFullWidth from '../../../Shared/Cards/CardFullWidth'


const ResearchArticles = ({ data }) => {
    console.log('Research Articles: ', data)

    return (
        <>
            <section className="gh-s-research-articles">
                <div className="--s-header">
                    <Container>
                        <h2 className="--s-title">LATEST ARTICLES</h2>
                    </Container>
                </div>

                <div className="--s-body">
                    <Container>
                        {data?.map(item => <>
                            {item?._type == "post" &&
                                <CardFullWidth
                                key={item._id}
                                id={item._id}
                                slug={item.slug}
                                date={item.date}
                                image={imageBuilder(item.image).width(253).height(168).url()}
                                subtitle={[item._type, item.topic[0]]}
                                title={item.title}
                                excerpt={item.excerpt}
                                author={[item?.author?._id, item?.author?.name ]}
                                />}
                            {/* {item?._type == "news" && <CardFullWidth key={item._id} data={item} type="News" />} */}
                        </>)}
                    </Container>
                </div>
            </section>
        </>
    )
}

export default ResearchArticles
