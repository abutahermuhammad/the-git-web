import { Carousel, Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { imageBuilder } from '../../../../lib/sanity'
import { width } from 'dom-helpers'
// API 
// import getFeaturedPosts from '../../../../lib/api'


const Hero = ({ data }) => {
    // console.log('Featured Posts: ', data)

    return (
        <>
            <section className="gh-s-hero">
                <Container>
                    <Carousel>
                        {data && data.map(item => (
                            <Carousel.Item key={item._id}>
                                <Image
                                    className="d-block w-100"
                                    src={imageBuilder(item.image).width(1920).height(1080).url()}
                                    alt="Third slide"
                                    width={1920}
                                    height={1080}
                                />
                                <Carousel.Caption bsPrefix="gh-carousel-caption">
                                    <h4 className="gh-carousel-subtitle">Article / Sea World</h4>
                                    <h3 className="gh-carousel-title">{item.title}</h3>
                                    <p className="gh-carousel-desc">{item.excerpt}</p>
                                    
                                    {item._type == 'post' && (
                                        <Link as={`/articles/${item.slug}`} href={`/articles/[slug]`}>
                                            <a className="gh-carousel-link">
                                                Read more
                                            </a>
                                        </Link> 
                                    )}
                                    
                                    {item._type == 'news' && (
                                        <Link as={`/news/${item.slug}`} href={`/news/[slug]`}>
                                            <a className="gh-carousel-link">
                                                Read more
                                            </a>
                                        </Link> 
                                    )}
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            
            </section>
        </>
    )
}

export default Hero


// // 
// export async function getStaticProps({ preview = false }) {
//   const options = 10;
//   const featuredPosts = await getFeaturedPosts()

//   return {
//     props: { featuredPosts, preview },
//     revalidate: 1
//   }
// }