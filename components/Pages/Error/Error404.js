import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'


const Error404 = () => {
    return (
        <>
            <section className="gh-error-404">
                <Container>
                    <div>
                        <h1>Our apologies. <br/>We're unable to find  <br/>the page you're looking for.</h1>
                        <h4>404. Page Not Found</h4>

                        <p>
                            <Link href={`/`}>
                                <a className="btn btn-custom-grey --social-link">
                                    Back to homepage
                                </a>
                            </Link>
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Error404
