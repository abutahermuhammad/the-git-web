import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Shared/Layout'
import Hero from '../components/Pages/Home/Hero/Hero'
import FeaturedPosts from '../components/Pages/Home/FeaturedPosts/FeaturedPosts'
import Banner from '../components/Pages/Home/Banner/Banner'
import Cookie from '../components/Shared/Cookie/Cookie'
import ReviewAndAnalysis from '../components/Pages/Home/ReviewAndAnalysis/ReviewAndAnalysis'
import ResearchArticles from '../components/Pages/Home/ResearchArticles/ResearchArticles'
import EditorsPick from '../components/Pages/Home/EditorsPick/EditorsPick'
// API 
import {
  getSliderContent,
  getTrendingPosts,
  getRecommendedPosts,
  getAllPostsWithSlug,
  getFeaturedPosts,
  getEditorPickPosts,
  getLatestPosts
} from '../lib/api'


export default function Home({ sliderPosts, trendingPost, recommendedPosts, latestPosts, featuredPosts, editorPick,  preview }) {
  return (
    <>
      <Head>
      </Head>

      <Layout className="landing">
        <Hero data={sliderPosts} />
        <FeaturedPosts data={trendingPost} />
        <Banner />
        <ReviewAndAnalysis data={trendingPost} />
        <EditorsPick title="RECOMMENDS" data={recommendedPosts} />
        <ResearchArticles data={latestPosts}/>
      </Layout>
    </>
  )
}


// 
export async function getStaticProps({ preview = false }) {
  const sliderLimit = [0, 5]  // Default: 0 to 5 total 5.
  const trendingLimit = [0, 4]  // Default: 0 to 4 total 4.
  const recommendedLimit = [0, 8]  // Default: 0 to 8 total 8.
  const latestLimit = [0, 8]  // Default: 0 to 8 total 8.

  const options = 10;
  
  const sliderPosts = await getSliderContent(sliderLimit)  // Slider Contents.
  const trendingPost = await getTrendingPosts(trendingLimit)  // Trending Contents.
  const recommendedPosts = await getRecommendedPosts(recommendedLimit)  // Recommended Contents.
  const latestPosts = await getLatestPosts(latestLimit)  // Recommended Contents.

  const allPosts = await getAllPostsWithSlug(options)
  const featuredPosts = await getFeaturedPosts()
  const editorPick = await getEditorPickPosts()

  return {
    props: { sliderPosts, trendingPost, recommendedPosts, latestPosts, featuredPosts, editorPick, preview },
    revalidate: 1
  }
}