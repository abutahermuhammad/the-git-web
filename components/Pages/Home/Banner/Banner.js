import Image from 'next/image'
import { Container } from 'react-bootstrap'


const Banner = () => {
    return (
        <>
            <section className="gh-s-banner">
                <Container>
                    <img src={`/img/bnr0.jpg`} layout="fill" />
                </Container>
            </section>
        </>
    )
}

export default Banner
