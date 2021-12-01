import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'react-bootstrap'


const ArticleBody = () => {
    return (
        <>
            <div className="--single-body">
                <Container>
                    <div className="--body-wrapper">
                        <p>Nearly 2,000 belugas frolic each summer near <Link href={`/`}><a>Arctic Canada’s Somerset Island</a></Link>, nursing their young, chattering in squeaks and whistles, and swimming about in shifting networks of companions and family. Scientists suspect many whale species share cultural traditions, much as humans do.</p>
                        <p><strong>John Ford wanted a whale’s-eye view</strong>. One summer day in 1978 a pod of killer whales raced toward a pebbled beach on British Columbia’s Vancouver Island. The young biologist was waiting in a wet suit and snorkel. The ghostly black-and-white procession steamed in like a team of U-boats, low and fast. Ford pressed on his face mask and slipped into the sea. In waters barely 10 feet deep, the creatures slowed and rolled to their sides. Bodies partially submerged, the fans at the end of their tails—their flukes—wagging, the whales began to twist and shimmy. One by one, each scuffed its side and belly on the stones, like grizzlies scratching against the pines.</p>
                        <p>Ford, age 66, has now studied killer whales, the largest dolphin and from the branch of the Cetacean order known as toothed whales, for more than 40 years. He’s seen this phenomenon, called beach rubbing, countless times since that first underwater glimpse. He can’t say for certain why the animals do it. He suspects it’s a form of social bonding. A larger question, though, has gnawed at him for much of his career: How come these killer whales, or orcas, do it, but not their nearly identical neighbors just to the south?</p>
                        <p>Ford, age 66, has now studied killer whales, the largest dolphin and from the branch of the Cetacean order known as toothed whales, for more than 40 years. He’s seen this phenomenon, called beach rubbing, countless times since that first underwater glimpse. He can’t say for certain why the animals do it. He suspects it’s a form of social bonding. A larger question, though, has gnawed at him for much of his career: How come these killer whales, or orcas, do it, but not their nearly identical neighbors just to the south?</p>

                        <div className="gh-quote">
                            <blockquote cite="#">Beach rubbing is routine among this population, called northern residents because they ply inland seas during summer and fall between the Canadian mainland and Vancouver Island. Not so their neighbors to the south. The orcas around the border with Washington State, where I live, have never been documented performing this ritual.</blockquote>
                        </div>

                        <p>A killer whale, or orca, chases herring in a Norwegian fjord. Groups of killer whales (which are technically part of the dolphin family) have distinct eating habits. Some corral schooling fish. Others hunt sharks or seals, while some feast almost exclusively on salmon. These habits are partly cultural—learned behaviors passed down through generations.</p>
                    
                        <figure>
                            <div className="figimage">
                                <Image src={`/img/as1.png`} alt="Trulli" width={1271} height={887} />
                            </div>
                            <figcaption>A humpback cow and calf are joined by two males in <Link href={`/`}><a>the Cook Islands</a></Link>.</figcaption>
                        </figure>
                    
                        <p>A humpback cow and calf are joined by two males in the Cook Islands. Males escort females with calves in hopes that they will be the next ones to mate with the mothers. Calves emit soft, whisper-like squeaks, perhaps to avoid being overheard by predators. Adult males sing in low, guttural moans and high-pitched whoops and screeches.</p>
                        <p>Beach rubbing is routine among this population, called northern residents because they ply inland seas during summer and fall between the Canadian mainland and Vancouver Island. Not so their neighbors to the south. The orcas around the border with Washington State, where I live, have never been documented performing this ritual.</p>

                        <h3>Humpbach escort</h3>
                        <p>Washington’s killer whales, called the southern residents, instead have their own conventions. They hold “greeting ceremonies,” facing off in tight lines before exploding in underwater parties of rubs and calls. That’s exceedingly rare up north. Southern residents are aerialists, performing twisting leaps and belly flops. Northern residents breach far less. Some years the southern residents push dead salmon around with their heads. Not the northerners: They occasionally headbutt one another, bumping noggins like bighorn sheep. “They just swim at each other and sort of collide,” Ford says.</p>
                        <p>Beach rubbing is routine among this population, called northern residents because they ply inland seas during summer and fall between the Canadian mainland and Vancouver Island. Not so their neighbors to the south. The orcas around the border with Washington State, where I live, have never been documented performing this ritual.</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ArticleBody
