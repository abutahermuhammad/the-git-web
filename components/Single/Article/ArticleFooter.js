import Link from 'next/link'
import { Container } from 'react-bootstrap'


const ArticleFooter = ({ references, importantLinks }) => {
    return (
        <>
            <div className="--single--footer">
            <Container>
                <div className="--footer-wrapper">
                    {/* References Linlk */}
                    {references?.length > 0 && (
                        <div className="--footer-ref">
                            <h5>Reference links:</h5>
                            
                            <table className="--footer-ref-table">
                                <tbody>
                                    {references.map( (reference, index) => (
                                        <tr key={ reference?._key}>
                                            <th>
                                                <p>
                                                    {++index}
                                                </p>
                                            </th>
                                            
                                            <td>
                                                <p>
                                                    <Link href={reference?.url}>
                                                        <a>
                                                            {reference?.title}
                                                        </a>
                                                    </Link>
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>    
                    )}
                        

                    {/* Important Linlk */}
                    {importantLinks?.length > 0 && (
                        <div className="--footer-ilink">
                            <h5>Important links:</h5>
                        
                            <table className="--footer-ilink-table">
                                <tbody>
                                    {importantLinks.map( (iLink, index) => (
                                        <tr key={iLink?._key}>
                                            <th>
                                                <p>
                                                    {iLink?.type}
                                                </p>
                                            </th>
                                        
                                            <td>
                                                <p>
                                                    <Link href={iLink?.url}>
                                                        <a className="">
                                                            {iLink?.title}
                                                        </a>
                                                    </Link>
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                        
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
