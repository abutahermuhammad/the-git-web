import Image from 'next/image'
import { Container } from 'react-bootstrap'


const ArticleCover = ({ alt, type,  src}) => {


    return (
        <>
            <div className="--single-cover">
                <Container style={{display: "block"}}>
                    {type === "img" && <>
                        <div className="--cover-img">
                            <Image alt={alt} src={src} width={1596} height={1064} />
                        </div>
                    </>}
                    
                    { type === "video" && <><div className="--cover-video"></div></>}
                </Container>
            </div>
        </>
    )
}

export default ArticleCover
