import Link from 'next/link'
import { Row, Col, Container } from 'react-bootstrap'


const ArticleFooter = () => {
    return (
        <>
            <div className="--single--footer">
            <Container>
                <div className="--footer-wrapper">
                    {/* Important Linlk */}
                    <div className="--footer-ref">
                        <h5>Important links:</h5>
                        
                        <table className="--footer-ref-table">
                            <tbody>
                                <tr>
                                    <th>
                                        <p>
                                            1
                                        </p>
                                    </th>
                                    
                                    <td>
                                        <p>
                                            <Link href={`/forums/FQ2351/new-pumpkin-toadlet-species-found—and-it-secretly-glows-in-the-dark`}>
                                                <a className={ `https://www.nature.com/articles/d41586-021-03534-y`}>
                                                    https://www.nature.com/articles/d41586-021-03534-y
                                                </a>
                                            </Link>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                              
                    </div>
                        

                    {/* Important Linlk */}
                    <div className="--footer-ilink">
                        <h5>Important links:</h5>
                        
                        <table className="--footer-ilink-table">
                            <tbody>
                                <tr>
                                    <th>
                                        <p>
                                            Forum
                                        </p>
                                    </th>
                                    
                                    <td>
                                        <p>
                                            <Link href={`/forums/FQ2351/new-pumpkin-toadlet-species-found—and-it-secretly-glows-in-the-dark`}>
                                                <a className="">
                                                    New pumpkin toadlet species found—and it secretly glows in the dark.
                                                </a>
                                            </Link>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                              
                    </div>
                        
                    {/* Social Link  */}
                    <div className="--footer-social">
                        <h5>Share with:</h5>
                        
                        <div className="--social-group">
                            <Link href={`/`}>
                                <a className="btn btn-sm btn-custom-grey --social-link">
                                    Facebook
                                </a>
                                </Link>
                                
                            <Link href={`/`}>
                                <a className="btn btn-sm btn-custom-grey --social-link">
                                    Instagram
                                </a>
                                </Link>
                                
                            <Link href={`/`}>
                                <a className="btn btn-sm btn-custom-grey --social-link">
                                    Linked in
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>

        </>
    )
}

export default ArticleFooter
