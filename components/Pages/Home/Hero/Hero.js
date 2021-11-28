import { Carousel, Container } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'


const Hero = () => {
    return (
        <>
            <section className="gh-s-hero">
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/bg.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption bsPrefix="gh-carousel-caption">
                                <h4 className="gh-carousel-subtitle">Article / Sea World</h4>
                                <h3 className="gh-carousel-title">Physicists Edge Closer to Taming the Three-Body Problem</h3>
                                <p className="gh-carousel-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                
                                <Link href={`/`}>
                                    <a className="gh-carousel-link">
                                        Read more
                                    </a>
                                </Link>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="/img/bg1.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption bsPrefix="gh-carousel-caption">
                                <h4 className="gh-carousel-subtitle">Article / Sea World</h4>
                                <h3 className="gh-carousel-title">New pumpkin toadlet species found—and it secretly glows in the dark</h3>
                                <p className="gh-carousel-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <Link href={`/`}>
                                    <a className="gh-carousel-link">
                                        Read more
                                    </a>
                                </Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            
            </section>
        </>
    )
}

export default Hero
