// CORE
import Link from 'next/link'
import Image from 'next/image'
// MARKDOWN 
import BlockContent from '@sanity/block-content-to-react'
// UI
import { Container } from 'react-bootstrap'


const ArticleBody = ({body}) => {
    return (
        <>
            <div className="--single-body">
                <Container>
                    <div className="--body-wrapper">
                        <BlockContent blocks={body} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID} dataset={process.env.NEXT_PUBLIC_SANITY_DATASET} />

                        {/* <hr />
                        <div className="gh-quote">
                            <blockquote cite="#">Beach rubbing is routine among this population, called northern residents because they ply inland seas during summer and fall between the Canadian mainland and Vancouver Island. Not so their neighbors to the south. The orcas around the border with Washington State, where I live, have never been documented performing this ritual.</blockquote>
                        </div>
                        <figure>
                            <div className="figimage">
                                <Image src={`/img/as1.png`} alt="Trulli" width={1271} height={887} />
                            </div>
                            <figcaption>A humpback cow and calf are joined by two males in <Link href={`/`}><a>the Cook Islands</a></Link>.</figcaption>
                        </figure> */}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ArticleBody
